const express = require('express');
const { postBerlinTime, postTime } = require('../controllers/clockController');

const route = express.Router();

route.post('/api/timetoberlin', postTime);

module.exports = route;