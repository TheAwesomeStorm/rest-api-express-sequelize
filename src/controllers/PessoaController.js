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

  static async readPessoaByIdAsync(req, res) {
    const { id } = req.params;
    try {
      const pessoa = await models.Pessoas.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(pessoa);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
}

module.exports = PessoaController;

