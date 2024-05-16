'use strict';

const { resolve } = require('node:path');

const ingPath = resolve(__dirname, '..', 'dist');

exports.ingPath = ingPath;