const express = require('express');
const macbook = require('../ApiCall/MacBook');

const macbookapi = express.Router();
macbookapi.route("/macbook").get(macbook.apiController);

module.exports = macbookapi;