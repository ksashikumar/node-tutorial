const connector = require('./connector');
const Sequelize = require('sequelize');

class Post extends Sequelize.Model {

}

Post.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
  }
}, {
  sequelize: connector,
  modelName: 'posts'
});

module.exports = Post;