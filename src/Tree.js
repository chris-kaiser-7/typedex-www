import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function Node({ node, nodes, parentId, level, x, y, canvas, generateChildren, expandedNodes, onExpand, onCollapse }) {
  const childNodes = nodes.filter(n => node.children.includes(n.type));
  const collapsed = !expandedNodes[node.type];
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    const count = Math.floor(Math.random() * 4) + 3;
    axios.post('http://127.0.0.1:8000/api/v1/type', {
      type: node.type,
      assistant: 'subtype_v2',
      count: count
    })
    .then(response => {
      generateChildren();
      onExpand(node.type, level);
      setGenerating(false);
    })
    .catch(error => console.error(error));
  };

  return (
    <React.Fragment>
      <div style={{ position: 'absolute', left: x, top: y }}>
        <div style={{ border: '1px solid black', padding: '10px', borderRadius: '10px', backgroundColor: 'white', width: '200px' }}>
          <h3>{node.type}</h3>
          <p>{node.general_description}</p>
          {collapsed && childNodes.length > 0 && <button onClick={() => onExpand(node.type, level)}>Expand</button>}
          {!collapsed && childNodes.length > 0 && <button onClick={() => onCollapse(node.type)}>Collapse</button>}
          {childNodes.length === 0 && (
            generating ? (
              <button disabled>Generating...</button>
            ) : (
              <button onClick={handleGenerate}>Generate</button>
            )
          )}
        </div>
      </div>
      {!collapsed && (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        {childNodes.map((child, index) => (
          <Node
            key={child.type}
            node={child}
            nodes={nodes}
            parentId={node.type}
            level={level + 1}
            x={50 + index * 250}
            y={y + 300}
            canvas={canvas}
            generateChildren={generateChildren}
            expandedNodes={expandedNodes}
            onExpand={onExpand}
            onCollapse={onCollapse}
          />
        ))}
        </div>
      )}
    </React.Fragment>
  );
}

function Tree() {
  const [nodes, setNodes] = useState([]);
  const [rootNodes, setRootNodes] = useState([]);
  const [selectedRoot, setSelectedRoot] = useState("");
  const [expandedNodes, setExpandedNodes] = useState({});
  const [nodeLevels, setNodeLevels] = useState({})
  const canvasRef = useRef(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/subtypes/')
      .then(response => {
        setNodes(response.data);
        setRootNodes(response.data.filter(node => !response.data.some(n => n.children.includes(node.type))));
      })
      .catch(error => console.error(error));
  }, []);

  const generateChildren = () => {
    axios.get('http://127.0.0.1:8000/api/v1/subtypes/')
      .then(response => {
        setNodes(response.data);
      })
      .catch(error => console.error(error));
  };

  const handleExpand = (nodeType, level) => {
    setNodeLevels({ ...nodeLevels, [nodeType]: level });
    const newExpandedNodes = {}
    Object.keys(expandedNodes).filter((node) => nodeLevels[node] < level && expandedNodes[node]).forEach((key) => {newExpandedNodes[key] = true})
    newExpandedNodes[nodeType] = true 

    setExpandedNodes(newExpandedNodes);
    console.log(nodeLevels)
    console.log(newExpandedNodes)
  };

  const handleCollapse = (nodeType) => {
    setExpandedNodes({ ...expandedNodes, [nodeType]: false });
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <select value={selectedRoot} onChange={e => setSelectedRoot(e.target.value)} style={{ marginBottom: '20px' }}>
        <option value="">Select a root node</option>
        {rootNodes.map(node => (
          <option key={node.type} value={node.type}>{node.type}</option>
        ))}
      </select>
      <canvas ref={canvasRef} width="1000" height="800" style={{ position: 'absolute', top: 0, left: 0 }} />
      {selectedRoot && (
        <Node node={nodes.find(node => node.type === selectedRoot)} nodes={nodes} level={0} x={50} y={90} canvas={canvasRef.current} generateChildren={generateChildren} expandedNodes={expandedNodes} onExpand={handleExpand} onCollapse={handleCollapse} />
      )}
    </div>
  );
}

export default Tree;