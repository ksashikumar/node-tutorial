require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const order = require('./routes/order');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/', order);

app.listen(process.env.PORT, () => {
  console.log('Application Started');
});
