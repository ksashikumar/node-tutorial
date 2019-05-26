const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mojo_mailing_list', {useNewUrlParser: true});

module.exports = mongoose;