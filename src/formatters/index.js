import stylishFormatter from './stylish.js';
import plainFormatter from './plain.js';

const formatters = {
  stylish: stylishFormatter,
  plain: plainFormatter,
};

export default (diffTree, format) => {
  if (typeof formatters[format] === 'undefined') {
    throw new Error(`Unknown formatter: ${format}`);
  }
  return formatters[format](diffTree);
};
