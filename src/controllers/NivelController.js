const models = require('../database/models');

class NivelController {
  static async getAllNiveisAsync(req, res) {
    try {
      const turmas = await models.Niveis.findAll()
      return res.status(200).json(turmas)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = NivelController;
