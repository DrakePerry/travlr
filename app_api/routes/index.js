var express = require('express');
var router = express.Router();

const tripsController = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsList);

router
    .route('/trips:tripCode')
    .get(tripsController.tripsList)
    .post(tripsController.tripsFindByCode);

module.exports = router;