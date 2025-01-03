import stylishFormatter from './formatters/stylish.js';

const formatters = {
  stylish: stylishFormatter,
};

export default (diffTree, format) => formatters[format](diffTree);
