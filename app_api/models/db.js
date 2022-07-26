const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
const dbURI = 'mongodb://localhost/travlr';

const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
        useNewURLParser: true
    }), 1000);
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
require('./travlr');