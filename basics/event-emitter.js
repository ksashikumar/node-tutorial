const EventEmitter = require('events');
const logger = require('./logger');

class CustomEmitter extends EventEmitter {
  
}

const eventEmitter = new CustomEmitter();

eventEmitter.on('userAdded', (arg) => {
  logger.info(`User Added: ${JSON.stringify(arg, 0, '\t')}`);
});

eventEmitter.emit('userAdded', { id: 1, name: 'Elon' });
eventEmitter.emit('userAdded', { id: 2, name: 'Musk' });

eventEmitter.once('dbConnected', (arg) => {
  logger.info(`Database connected: ${JSON.stringify(arg, 0, '\t')}`);
});

eventEmitter.emit('dbConnected', { host: 'localhost' });

eventEmitter.emit('dbConnected', { host: 'localhost' });


