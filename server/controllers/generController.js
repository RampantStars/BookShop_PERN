const { BookGenre } = require('../models/models');
const ApiError = require('../error/apiError');

class GenerController {
  async create(req, res) {
    const { name } = req.body;
    const type = await BookGenre.create({ name });
    return res.json(type);
  }
  async getAll(req, res) {
    const types = await BookGenre.findAll();
    return res.json(types);
  }
  async delete(req, res) {
    const { id } = req.params;
    if (!id) {
      return next(ApiError.badRequest('Не задан ID'));
    }
    const type = await BookGenre.destroy({ where: { id: id } });
    return res.json(type);
  }
}

module.exports = new GenerController();
