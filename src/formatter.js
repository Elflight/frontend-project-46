// const formatDiffResult = (diffTree, format = 'flat')
const formatDiffResult = (diffTree) => {
  // console.table(diffTree);
  const res = diffTree.map((node) => {
    const spaces = '  ';
    switch (node.type) {
      case 'added':
        return `${spaces}+ ${node.key}: ${node.value}`;
      case 'deleted':
        return `${spaces}- ${node.key}: ${node.value}`;
      case 'unchanged':
        return `${spaces}  ${node.key}: ${node.value}`;
      case 'changed':
        return `${spaces}- ${node.key}: ${node.value1}\n${spaces}+ ${node.key}: ${node.value2}`;
      default:
        return false;
    }
  });
  return `{\n${res.join('\n')}\n}`;
};

export default formatDiffResult;
