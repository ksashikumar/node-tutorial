const mongoose = require('../mongo-connector');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: String,
  body: String,
  author: String,
  date: Date,
}, { timestamps: {
  createdAt: 'created_at'
}});


module.exports = BlogSchema;
