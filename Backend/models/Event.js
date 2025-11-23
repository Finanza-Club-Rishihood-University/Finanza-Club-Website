const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({}, { strict: false, collection: 'Events' });

module.exports = mongoose.model('Event', eventSchema);
