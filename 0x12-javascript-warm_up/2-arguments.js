#!/usr/bin/node
const args = require('process').argv;
if (args.length === 2) {
  console.log('No argument');
} else if (args.length === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}