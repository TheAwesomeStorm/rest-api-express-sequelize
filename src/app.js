const express = require('express');
const bodyParser =  require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'REST API with Node.js, express and sequelize' });
})

module.exports = app;
