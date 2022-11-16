const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router
  .get('/pessoas', PessoaController.readAllPessoasAsync)
  .get('/pessoas/:id', PessoaController.readPessoaByIdAsync)
  .post('/pessoas', PessoaController.createPessoaAsync);

module.exports = router;
