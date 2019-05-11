const express = require('express');
const routes = require('./routes');

const errorHandler = require('./middlewares/error-handler');

const app = express();

app.set('x-powered-by', false);
app.use('/api/', routes);
app.use(errorHandler);

console.log(`Google Key: ${process.env.GOOGLE_API_KEY}`);

app.listen(process.env.PORT || 3000, () => {
  console.log('Application Started');
});