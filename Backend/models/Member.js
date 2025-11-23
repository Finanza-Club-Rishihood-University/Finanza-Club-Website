const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({}, { strict: false, collection: 'Members' });

module.exports = mongoose.model('Member', memberSchema);
