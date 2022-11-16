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

  static async createPessoaAsync(req, res) {
    const pessoa = req.body;
    try {
      const createdPessoa = await models.Pessoas.create(pessoa);
      return res.status(200).json(createdPessoa);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async updatePessoaAsync(req, res) {
    const { id } = req.params;
    const pessoa = req.body;
    try {
      await models.Pessoas.update(pessoa, {
        where: {
          id: Number(id),
        }
      });
      const updatedPessoa = await models.Pessoas.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(updatedPessoa);
    }
    catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async deletePessoaAsync(req, res) {
    const { id } = req.params;
    try {
      await models.Pessoas.destroy({
        where: {
          id: Number(id),
        }
      });
      return res.status(200).json({ message: `Pessoa de ID ${id} removida com sucesso` });
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
}

module.exports = PessoaController;

