import React, { useState } from 'react';

const TreeNode = ({ node, level, onToggle, expandedNodeId }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    onToggle(node.id);
  };

  const isActive = expandedNodeId === node.id;

  return (
    <div style={{ marginLeft: level * 20, backgroundColor: isActive ? '#e0e0e0' : 'transparent' }}>
      <div onClick={handleToggle} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <button>{isExpanded ? '-' : '+'}</button>
        <div style={{ marginLeft: 10 }}>
          <div>{node.title}</div>
          <div>{node.description}</div>
        </div>
      </div>
      {isExpanded && node.children && node.children.map((childNode) => (
        <TreeNode
          key={childNode.id}
          node={childNode}
          level={level + 1}
          onToggle={onToggle}
          expandedNodeId={expandedNodeId}
        />
      ))}
    </div>
  );
};

const Tree = ({ data }) => {
  const [expandedNodeId, setExpandedNodeId] = useState(null);

  const handleToggle = (nodeId) => {
    setExpandedNodeId(expandedNodeId === nodeId ? null : nodeId);
  };

  return (
    <div>
      {data.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          level={0}
          onToggle={handleToggle}
          expandedNodeId={expandedNodeId}
        />
      ))}
    </div>
  );
};

const treeData = [
  {
    id: 1,
    title: 'Node 1',
    description: 'Description 1',
    children: [
      {
        id: 2,
        title: 'Node 1.1',
        description: 'Description 1.1',
        children: [
          {
            id: 3,
            title: 'Node 1.1.1',
            description: 'Description 1.1.1',
          },
        ],
      },
      {
        id: 4,
        title: 'Node 1.2',
        description: 'Description 1.2',
        children: [
          {
            id: 5,
            title: 'Node 1.2.1',
            description: 'Description 1.2.1',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Node 2',
    description: 'Description 2',
    children: [
      {
        id: 7,
        title: 'Node 2.1',
        description: 'Description 2.1',
        children: [
          {
            id: 8,
            title: 'Node 2.1.1',
            description: 'Description 2.1.1',
          },
        ],
      },
    ],
  },
];

const App = () => {
  return (
    <div>
      <h1>Tree of Nodes</h1>
      <Tree data={treeData} />
    </div>
  );
};

export default App;