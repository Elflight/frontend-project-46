import stylishFormatter from './stylish.js';
import plainFormatter from './plain.js';
import jsonFormatter from './json.js';

const formatters = {
  stylish: stylishFormatter,
  plain: plainFormatter,
  json: jsonFormatter,
};

export default (diffTree, format) => {
  if (typeof formatters[format] === 'undefined') {
    throw new Error(`Unknown formatter: ${format}`);
  }
  return formatters[format](diffTree);
};
