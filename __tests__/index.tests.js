import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import fs from 'fs';
import gendiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('jsonToTree', () => {
  const json1 = getFixturePath('file1.json');
  const json2 = getFixturePath('file2.json');
  const treeResult = fs.readFileSync(getFixturePath('result_tree.txt'), 'utf-8');
  const diffResult = gendiff(json1, json2);

  expect(diffResult).toEqual(treeResult);
});
