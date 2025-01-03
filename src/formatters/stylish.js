import _ from 'lodash';

const indent = ' ';
const defaultIndentLength = 4;

const getDepthIndent = (depth, spaces = defaultIndentLength) => indent.repeat(depth * spaces - 2);

const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return String(value);
  }

  const lines = Object.entries(value).map(([key, val]) => `${getDepthIndent(depth + 1)}  ${key}: ${stringify(val, depth + 1)}`);
  return `{\n${lines.join('\n')}\n${getDepthIndent(depth)}  }`;
};

const formatDiffResult = (diffTree) => {
  const formatDiffStep = (tree, depth = 1) => {
    const lines = tree.map((node) => {
      switch (node.type) {
        case 'added':
          return `${getDepthIndent(depth)}+ ${node.key}: ${stringify(node.value, depth)}`;
        case 'deleted':
          return `${getDepthIndent(depth)}- ${node.key}: ${stringify(node.value, depth)}`;
        case 'unchanged':
          return `${getDepthIndent(depth)}  ${node.key}: ${stringify(node.value, depth)}`;
        case 'changed':
          return [
            `${getDepthIndent(depth)}- ${node.key}: ${stringify(node.value1, depth)}`,
            `${getDepthIndent(depth)}+ ${node.key}: ${stringify(node.value2, depth)}`,
          ].join('\n');
        case 'nested':
          return `${getDepthIndent(depth)}  ${node.key}: {\n${formatDiffStep(node.children, depth + 1)}\n${getDepthIndent(depth)}  }`;
        default:
          throw new Error(`Unknown type: ${node.type}`);
      }
    });

    return lines.join('\n');
  };

  return `{\n${formatDiffStep(diffTree)}\n}`;
};

export default formatDiffResult;
