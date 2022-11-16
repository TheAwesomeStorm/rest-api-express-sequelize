const bodyParser = require('body-parser');
const pessoaRoutes = require('./pessoaRoutes.js');
const nivelRoutes = require('./nivelRoutes.js');
const turmaRoutes = require('./turmaRoutes.js');

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ message: 'REST API with Node.js, express and sequelize' });
  });

  app.use(
    bodyParser.json(),
    pessoaRoutes,
    nivelRoutes,
    turmaRoutes,
  );
};

module.exports = routes;
