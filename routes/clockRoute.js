const express = require('express');
const { getClock, postTime } = require('../controllers/clockController');

const route = express.Router();

route.post('/api/clock', postTime);

module.exports = route;