'use strict';

const CraftBootloader = require('./main.js');

document.addEventListener('DOMContentLoaded',CraftBootloader.default.main);

module.exports = CraftBootloader.default || CraftBootloader;
