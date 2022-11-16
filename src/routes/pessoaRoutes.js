const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router
  .get('/pessoas', PessoaController.readAllPessoasAsync)
  .get('/pessoas/:id', PessoaController.readPessoaByIdAsync)
  .post('/pessoas', PessoaController.createPessoaAsync)
  .put('/pessoas/:id', PessoaController.updatePessoaAsync)
  .delete('/pessoas/:id', PessoaController.deletePessoaAsync)
  .get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.readMatriculaByIdFromPessoaIdAsync)
  .post('/pessoas/:estudanteId/matriculas', PessoaController.createMatriculaFromPessoaIdAsync)
  .put('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.updateMatriculaFromPessoaIdAsync)
  .delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.deleteMatriculaFromPessoaIdAsync);

module.exports = router;
