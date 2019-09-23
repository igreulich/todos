/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const express = require('express');
const favicon = require('express-favicon');

const port = process.env.PORT || 3000;

const app = express();

app.use(favicon(path.join(__dirname, '..', 'dist/public/favicon/favicon.ico')));

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/ping', (req, res) => res.send('pong'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist/index.html'));
});

app.listen(port, () => console.log(`Todo App listening on port ${port}!`));
