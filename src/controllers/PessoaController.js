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

  static async readMatriculaByIdFromPessoaIdAsync(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      const matricula = await models.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        }
      });
      return res.status(200).json(matricula);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async createMatriculaFromPessoaIdAsync(req, res) {
    const { estudanteId } = req.params;
    const matricula = { ...req.body, estudante_id: Number(estudanteId) };
    try {
      const createdMatricula = await models.Matriculas.create(matricula);
      return res.status(200).json(createdMatricula);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async updateMatriculaFromPessoaIdAsync(req, res) {
    const { estudanteId, matriculaId } = req.params;
    const matricula = req.body;
    try {
      await models.Matriculas.update(matricula, {
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        }
      });
      const updatedMatricula = await models.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
        }
      })
      return res.status(200).json(updatedMatricula);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async deleteMatriculaFromPessoaIdAsync(req, res) {
    const { matriculaId, estudanteId } = req.params;
    try {
      await models.Matriculas.destroy({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        }
      });
      return res.status(200).json({ message: `Matrícula de ID ${matriculaId}, do estudante de ID ${estudanteId}, removida com sucesso.` });
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
}

module.exports = PessoaController;

