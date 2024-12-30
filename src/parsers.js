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
  if (isFileExists(fullpath)) {
    const file = fs.readFileSync(fullpath, 'utf8');
    const ext = getFileExtension(fullpath);
    return parsers[ext](file);
  }
  return false;
};

export default parseFile;
