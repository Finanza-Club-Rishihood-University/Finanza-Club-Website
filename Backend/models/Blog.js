const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({}, { strict: false, collection: 'Blogs' });

module.exports = mongoose.model('Blog', blogSchema);
