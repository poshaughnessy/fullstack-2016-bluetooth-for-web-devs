'use strict';

const express = require('express');
const PORT = process.env.PORT || 9000;

let app = express();

app.use( '/', express.static('build') );

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT);

console.log('Dev server started', PORT);
