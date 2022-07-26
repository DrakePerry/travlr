const mongoose = require('mongoose');
const { async } = require('seed/lib/seed');
const Model = mongoose.model('trips');

// GET: /trips - lists all of the trips
const tripsList = async (req, res) => {
    Model.find({}) // empty filter for alll
    .exec((err, trips) => {
        if (!trips) {
            return res
            .status(404)
            .json({"message": "trips not found" });
        } else if (err) {
            return res
            .status(404)
            .json(err);
        } else {
            return res.status(200)
            .json(trips);
        }
        });
    };

// GET: /trips/:tripCode - returns a single trip
const tripsFindByCode = asynch(req, res) => {
    Model
        .find({ 'code': req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res
                .status(404)
                .json({"message": "trip not found" });
            } else if (err) {
                return res
                .status(404)
                .json(err);
            } else {
                return res
                    .status(200)
                    .json(trip);
            }

            });
};

module.exports = {
    tripsList,
    tripsFindByCode
}