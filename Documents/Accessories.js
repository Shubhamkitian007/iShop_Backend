const express = require('express');
const accessories = require('../ApiCall/Accessories');

const accessoriesapi = express.Router();
accessoriesapi.route("/accessories").get(accessories.apiController);

module.exports = accessoriesapi;