import parseFile from './parser.js';
import getDiffTree from './difftree.js';
import formatDiffResult from './formatter.js';

const gendiff = (filepath1, filepath2) => {
    const firstObj = parseFile(filepath1);
    const secondObj = parseFile(filepath2);

    const diffTree = getDiffTree(firstObj, secondObj);

    return formatDiffResult(diffTree);

    // console.log(diffTree);
};

export default gendiff;