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

const getParsedData = (fileData, fileExtension) => {
  if (typeof parsers[fileExtension] === 'undefined') {
    throw new Error(`Parser for: ${fileExtension} not found`);
  }

  return parsers[fileExtension](fileData);
};

const parseFile = (filepath) => {
  const fullpath = getFullpath(filepath);
  if (!isFileExists(fullpath)) {
    throw new Error(`File: ${fullpath} not found`);
  }
  const file = fs.readFileSync(fullpath, 'utf8');
  const ext = getFileExtension(fullpath);

  return getParsedData(file, ext);
};

export default parseFile;
