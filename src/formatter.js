const formatDiffResult = (diffTree, format = 'flat') => {
    // console.table(diffTree);
    const res = diffTree.map((node)=>{
        switch(node.type) {
            case 'added':
                return `+ ${node.key}: ${node.value}`;
                break;
            case 'deleted':
                return `- ${node.key}: ${node.value}`;
                break;
            case 'unchanged':
                return `  ${node.key}: ${node.value}`;
                break;
            case 'changed':
                return `- ${node.key}: ${node.value1}\n+ ${node.key}: ${node.value2}`;
                break;
            default:
                return false;
        }
    });
    return `{\n${res.join('\n')}\n}`;
};

export default formatDiffResult;