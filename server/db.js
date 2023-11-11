const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

mongoose.connect (MONGO_URI)

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = db;
