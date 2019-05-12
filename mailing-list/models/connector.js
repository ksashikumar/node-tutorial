const Sequelize = require('sequelize');

const dbName = process.env.DB_NAME || 'mojojo_mailing_list';
const dbHost = process.env.DB_HOST || 'localhost';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || 'test';

const connector = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql'
});

connector.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

connector.sync();

module.exports = connector;