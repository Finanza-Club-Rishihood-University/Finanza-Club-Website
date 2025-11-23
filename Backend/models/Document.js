const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({}, { strict: false, collection: 'Documents' });

module.exports = mongoose.model('Document', documentSchema);
