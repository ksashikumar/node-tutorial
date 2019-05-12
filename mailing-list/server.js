require('./models/connector');

const express = require('express');
const routes = require('./routes');

const errorHandler = require('./middlewares/error-handler');

const app = express();

app.use(express.json());
app.set('x-powered-by', false);
app.use('/api/', routes);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log('Application Started');
});