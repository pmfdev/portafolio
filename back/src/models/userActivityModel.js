const mongoose = require('mongoose');

const userActivitySchema = new mongoose.Schema({
  page_type: String,
  visit_count: { type: Number, default: 0 }
});

module.exports = mongoose.model('UserActivity', userActivitySchema);
