const { response } = require('express');
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

// /* GET travel view */
// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// const travel = (req, res) => {
//     res.render('travel', { title: 'Travlr Getaways'});
// };

// module.exports = {
//     travel
// };

const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel';
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No trips exist in the database';
        }
    }
    res.render('travel', 
        {
            title: pageTitle, 
            trips: responseBody,
            message
        }
    );
}

//  Get Travel list view
const travelList = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: '${apiOptions.server}${path}',
        method: 'GET',
        json: {},
    };
    console.info('>> travelController.travelList calling ' + requestOptions.URL);
    request(
        requestOptions,
            (err, {statusCode }, body) =>
            {
                iff (err) {
                    console.error(err);
                }
                renderTravelList(req, res, body);
            }
    );
};