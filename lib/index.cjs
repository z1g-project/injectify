'use strict';

const { resolve } = require('node:path');

const ingPath = resolve(__dirname, '..', 'dist');
const bundPath = resolve(__dirname, '..', 'dist');
exports.bundPath = bundPath;
exports.ingPath = ingPath;