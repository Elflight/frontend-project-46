#!/usr/bin/env node

import { program } from 'commander';

const genDiff = (filepath1, filepath2) => {return true};

program
  .name('genDiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format')

// program.command('genDiff')
//   .description('Compares two configuration files and shows a difference.')
//   .argument('<filepath1>', 'первый файл')
//   .argument('<filepath2>', 'второй файл')
// //   .option('-c, --connector <type>', 'соединительная строка', '')
//   .action((first, second, options) => {
//     // BEGIN (write your solution here)
    
//     // END
//   });

program.parse();
