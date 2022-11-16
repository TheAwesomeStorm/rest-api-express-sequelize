const models = require('../database/models');

class TurmaController {
  static async getAllTurmasAsync(req, res) {
    try {
      const turmas = await models.Turmas.findAll()
      return res.status(200).json(turmas)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TurmaController;
