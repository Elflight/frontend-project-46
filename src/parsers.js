import path from 'path';
import fs from 'fs';
import YAML from 'yaml';

const getFullpath = (filepath) => path.resolve(process.cwd(), filepath);
const getFileExtension = (filepath) => path.extname(filepath).slice(1);
const isFileExists = (fullpath) => fs.existsSync(fullpath);

const parsers = {
  json: JSON.parse,
  yml: YAML.parse,
  yaml: YAML.parse,
};

const parseFile = (filepath) => {
  const fullpath = getFullpath(filepath);
  if (!isFileExists(fullpath)) {
    throw new Error(`File: ${fullpath} not found`);
  }
  const file = fs.readFileSync(fullpath, 'utf8');
  const ext = getFileExtension(fullpath);

  if (typeof parsers[ext] === 'undefined') {
    throw new Error(`Parser for: ${ext} not found`);
  }

  return parsers[ext](file);
};

export default parseFile;
