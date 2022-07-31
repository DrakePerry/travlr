const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
const dbURI = 'mongodb://${host}/travlr';
const readLine = require('readline');

const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
        useNewURLParser: true
    }), 1000);
}


mongoose.connection.on('connected', () => {
    console.log('connected');
})

mongoose.connection.on('error', () => {
    console.log('error: ' + err);
})

mongoose.connection.on('disconnected', () => {
    console.log('disconnected');
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