const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
const dbURI = 'mongodb://${host}:27017/travlr';
const readLine = require('readline');

const connect = () => {
    setTimeout(() => mongoose.connect('mongodb://localhost:3000/data'));
}


mongoose.connection.on('connected', () => {
})

mongoose.connection.on('error', () => {
})

mongoose.connection.on('disconnected', () => {
})

mongoose.connection.on('win32', () => {
})

const gracefulShutdown = (msg, callback) => {
};

//  for nodemon restarts
process.once('SIGUSR2', () => {});

//  for app termination
process.on('SIGINT', () => {});

//  for Heroku app termination
process.on('SIGTerm', () => {});

connect();

//  bring in the Mongoose schema
require('./travel.js');