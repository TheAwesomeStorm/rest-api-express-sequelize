import express from 'express';
import bodyParser from 'body-parser';

export const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  return res.status(200).send({ messsage: 'REST API with Node.js, express and sequelize' });
})
