import parseFile from './parsers.js';
import getDiffTree from './difftree.js';
import formatDiffResult from './formatter.js';

const gendiff = (filepath1, filepath2, resultFormat = 'stylish') => {
  const firstObj = parseFile(filepath1);
  const secondObj = parseFile(filepath2);

  const diffTree = getDiffTree(firstObj, secondObj);

  return formatDiffResult(diffTree, resultFormat);
};

export default gendiff;
