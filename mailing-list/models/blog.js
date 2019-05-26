const mongoose = require('./mongo-connector');
const BlogSchema = require('./schemas/blog');
const Model = mongoose.Model;

class Blog extends Model {

}

module.exports = mongoose.model(Blog, BlogSchema, 'blogs');