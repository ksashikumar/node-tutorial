const OS = require('os');
const logger = require('./logger');

function printOSInfo() {
  logger.info(`CPU Count: ${JSON.stringify(OS.cpus(), null, '\t')}`);
  logger.info(`Total Memory: ${JSON.stringify(OS.totalmem())}`);
}

printOSInfo();