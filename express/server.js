const fs = require('fs');

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const order = require('./routes/order');


const addRequestId = require('./middlewares/add-request-id');
const requestLogger = require('./middlewares/request-logger');

const errorHandler = require('./middlewares/error-handler');

const app = express();

app.set('x-powered-by', false);

app.use([addRequestId, requestLogger]);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/', order);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log('Application Started');
});
