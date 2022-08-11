const express = require('express');
const laptop = require('../ApiCall/Laptop');

const laptopapi = express.Router();
laptopapi.route("/laptop").get(laptop.apiController);

module.exports = laptopapi;