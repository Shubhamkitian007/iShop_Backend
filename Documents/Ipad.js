const express = require('express');
const ipad = require('../ApiCall/Ipad');

const ipadapi = express.Router();
ipadapi.route("/ipad").get(ipad.apiController);

module.exports = ipadapi;