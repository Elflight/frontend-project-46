import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import fs from 'fs';
import gendiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('jsonToStylish', () => {
  const json1 = getFixturePath('cfile1.json');
  const json2 = getFixturePath('cfile2.json');
  const treeResult = fs.readFileSync(getFixturePath('cresult_tree.txt'), 'utf-8');
  const diffResult = gendiff(json1, json2);

  expect(diffResult).toEqual(treeResult);
});

test('yamlToStylish', () => {
  const yml1 = getFixturePath('cfile1.yaml');
  const yml2 = getFixturePath('cfile2.yaml');
  const treeResult = fs.readFileSync(getFixturePath('cresult_tree.txt'), 'utf-8');
  const diffResult = gendiff(yml1, yml2);

  expect(diffResult).toEqual(treeResult);
});

test('jsonToPlain', () => {
  const json1 = getFixturePath('cfile1.json');
  const json2 = getFixturePath('cfile2.json');
  const treeResult = fs.readFileSync(getFixturePath('cresult_plain.txt'), 'utf-8');
  const diffResult = gendiff(json1, json2, 'plain');

  expect(diffResult).toEqual(treeResult);
});
