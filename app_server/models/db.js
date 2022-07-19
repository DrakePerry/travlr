const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
const dbURI = 'mongodb://${host}/travlr';
const readLine = require('readLine');

//  avoid 'current Server Discovery and Monitoring engine is depricated'
mongoose.set('useUnifiedTopology', true);

const connect = () => {
    setTimeout(() => mongoose.connect(dbURIO, {
        useNewUrlParser: true,
        useCreateIndex: true
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
require('/travlr');