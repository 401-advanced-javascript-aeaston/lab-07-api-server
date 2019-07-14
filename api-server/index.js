'use strict';

const server = require('./lib/server.js');
const error = require('./lib/errorhandler.js')

app.use('*', (req, res) => {
  res.status(404).send('not found');
});

app.use((err, req, res, next) => {
  console.log('In the error handler');
  res.status(500).send('ERROR!');
});

server.start(8080);


