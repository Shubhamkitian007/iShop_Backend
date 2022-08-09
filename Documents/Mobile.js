const express = require('express');
const mobile = require('../ApiCall/Mobile');

const mobileapi = express.Router();
mobileapi.route("/mobile").get(mobile.apiController);

module.exports = mobileapi;