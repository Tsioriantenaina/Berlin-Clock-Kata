const express = require('express');
const { getClock, postTime } = require('../controllers/clockController');

const route = express.Router();

route.post('/api/timetoberlin', postTime);

module.exports = route;