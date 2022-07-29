const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/trips');
const ctrlReviews = require('../controllers/testemonials');

// trips
router                                                       
  .route('/trips')                                        
  .get(ctrlLocations.tripsGet)                 
  .post(ctrlLocations.tripsCreate);                       
router
  .route('/trips/:code')                            
  .get(ctrlLocations.tripsGetONe)
  .put(ctrlLocations.tripsCreate)
  .delete(ctrlLocations.tripsDeleteOne);

// reviews
router
  .route('/locations/:locationid/testemonials')
  .post(ctrlReviews.testemonialsCreate);
router
  .route('/locations/:locationid/testemonials/:name')
  .get(ctrlReviews.testemonialsReadOne)
  .put(ctrlReviews.testemonialsUpdateOne)
  .delete(ctrlReviews.testemonialsDeleteOne);

module.exports = router;     