const stringify = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  if (value instanceof Object || Array.isArray(value)) {
    return '[complex value]';
  }
  return value;
};

const formatDiffResult = (tree, parentNodeName = '') => {
  let nodeName = '';
  const lines = tree.map((node) => {
    nodeName = (parentNodeName === '') ? node.key : `${parentNodeName}.${node.key}`;
    switch (node.type) {
      case 'added':
        return `Property '${nodeName}' was added with value: ${stringify(node.value)}`;
      case 'deleted':
        return `Property '${nodeName}' was removed`;
      case 'unchanged':
        break;
      case 'changed':
        return `Property '${nodeName}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
      case 'nested':
        return formatDiffResult(node.children, nodeName);
      default:
        throw new Error(`Unknown type: ${node.type}`);
    }
    return undefined;
  });

  return lines
    .filter((line) => line !== undefined)
    .join('\n');
};

export default formatDiffResult;
