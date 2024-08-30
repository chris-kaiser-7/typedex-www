import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const NodeContainer = styled.div`
  position: absolute;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
`;

const NodeContent = styled.div`
  border: 1px solid transparent;
  padding: 18px;
  border-radius: 12px;
  background-image: linear-gradient(145deg, #f0f8ff, #e6f2ff);
  width: 200px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 0.85em;
    color: #555;
  }

  button {
    background-color: #ff7f50;
    color: white;
    border: none;
    padding: 8px 14px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 0.9em;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e0674f;
    }

    &:disabled {
      background-color: #cccccc;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;

  h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9em;
    margin-bottom: 15px;
  }

  input {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    background-color: #ff7f50;
    color: white;
    border: none;
    padding: 8px 14px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 0.9em;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e0674f;
    }
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const TreeContainer = styled.div`
  background-color: white;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSelect = styled.select`
  margin-bottom: 20px;
`;

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;

function Node({ node, nodes, parentId, level, x, y, canvas, generateChildren, expandedNodes, onExpand, onCollapse, onNodeClick }) {
  const childNodes = nodes.filter((n) => node.children.includes(n.type));
  const collapsed = !expandedNodes[node.type];
  const [generating, setGenerating] = useState(false);

  const handleGenerate = (event) => {
    event.stopPropagation(); // Prevent event propagation to NodeContent
    setGenerating(true);
    const count = Math.floor(Math.random() * 4) + 3;
    axios
      .post('http://127.0.0.1:8000/api/v1/type', {
        type: node.type,
        count: count,
      })
      .then((response) => {
        generateChildren();
        onExpand(node.type, level);
        setGenerating(false);
      })
      .catch((error) => console.error(error));
  };

  const handleExpand = (event) => {
    event.stopPropagation(); // Prevent event propagation to NodeContent
    onExpand(node.type, level);
  };

  const handleCollapse = (event) => {
    event.stopPropagation(); // Prevent event propagation to NodeContent
    onCollapse(node.type);
  };

  return (
    <React.Fragment>
      <NodeContainer x={x} y={y}>
        <NodeContent onClick={() => onNodeClick(node)}>
          <h3>{node.type}</h3>
          <p>{node.general_description}</p>
          {collapsed && childNodes.length > 0 && (
            <button onClick={handleExpand}>Expand</button>
          )}
          {!collapsed && childNodes.length > 0 && (
            <button onClick={handleCollapse}>Collapse</button>
          )}
          {childNodes.length === 0 &&
            (generating ? (
              <button disabled>Generating...</button>
            ) : (
              <button onClick={handleGenerate}>Generate</button>
            ))}
        </NodeContent>
      </NodeContainer>
      {!collapsed && (
        <FlexContainer>
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
              onNodeClick={onNodeClick}
            />
          ))}
        </FlexContainer>
      )}
    </React.Fragment>
  );
}

function Tree() {
  const [nodes, setNodes] = useState([]);
  const [rootNodes, setRootNodes] = useState([]);
  const [selectedRoot, setSelectedRoot] = useState('');
  const [expandedNodes, setExpandedNodes] = useState({});
  const [nodeLevels, setNodeLevels] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/v1/subtype/')
      .then((response) => {
        setNodes(response.data);
        setRootNodes(response.data.filter((node) => !response.data.some((n) => n.children.includes(node.name))));
      })
      .catch((error) => console.error(error));
  }, []);

  const generateChildren = () => {
    axios
      .get('http://127.0.0.1:8000/api/v1/subtype/')
      .then((response) => {
        setNodes(response.data);
      })
      .catch((error) => console.error(error));
  };

  const handleExpand = (nodeType, level) => {
    setNodeLevels({ ...nodeLevels, [nodeType]: level });
    const newExpandedNodes = {};
    Object.keys(expandedNodes)
      .filter((node) => nodeLevels[node] < level && expandedNodes[node])
      .forEach((key) => {
        newExpandedNodes[key] = true;
      });
    newExpandedNodes[nodeType] = true;

    setExpandedNodes(newExpandedNodes);
    console.log(nodeLevels);
    console.log(newExpandedNodes);
  };

  const handleCollapse = (nodeType) => {
    setExpandedNodes({ ...expandedNodes, [nodeType]: false });
  };

  const handleNodeClick = (node) => {
    setSelectedNode(node);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedNode(null);
  };

  return (
    <TreeContainer>
      <StyledSelect value={selectedRoot} onChange={(e) => setSelectedRoot(e.target.value)}>
        <option value="">Select a root node</option>
        {rootNodes.map((node) => (
          <option key={node.name} value={node.name}>
            {node.name}
          </option>
        ))}
      </StyledSelect>
      <StyledCanvas ref={canvasRef} width="1000" height="800" />
      {selectedRoot && (
        <Node
          node={nodes.find((node) => node.name === selectedRoot)}
          nodes={nodes}
          level={0}
          x={50}
          y={90}
          canvas={canvasRef.current}
          generateChildren={generateChildren}
          expandedNodes={expandedNodes}
          onExpand={handleExpand}
          onCollapse={handleCollapse}
          onNodeClick={handleNodeClick}
        />
      )}
      {showModal && selectedNode && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>{selectedNode.name} Details</h3>
            <p>{selectedNode.general_description}</p>
            <input type="text" placeholder="Additional Field 1" />
            <input type="text" placeholder="Additional Field 2" />
            <button onClick={closeModal}>Close</button>
          </ModalContent>
        </ModalOverlay>
      )}
    </TreeContainer>
  );
}

export default Tree;