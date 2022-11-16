const models = require('../database/models');

class PessoaController {
  static async readAllPessoasAsync(req, res) {
    try {
      const pessoas = await models.Pessoas.findAll();
      return res.status(200).json(pessoas);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
}

module.exports = PessoaController;

