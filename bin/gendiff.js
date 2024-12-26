#!/usr/bin/env node

import { program } from 'commander';
import parseFile from '../src/parser.js';

program
  .name('genDiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const firstObj = parseFile(filepath1);
    const secondObj = parseFile(filepath2);
    console.log(secondObj);
  });

program.parse();
