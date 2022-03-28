const { BookType } = require('../models/models');
const ApiError = require('../error/apiError');

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await BookType.create({ name });
    return res.json(type);
  }
  async getAll(req, res) {
    const types = await BookType.findAll();
    return res.json(types);
  }
  async delete(req, res) {
    const { id } = req.params;
    if (!id) {
      return next(ApiError.badRequest('Не задан ID'));
    }
    const type = await BookType.destroy({ where: { id: id } });
    return res.json(type);
  }
}

module.exports = new TypeController();
