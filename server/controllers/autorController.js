const { Autor } = require('../models/models');

class AutorController {
  async create(req, res) {
    const { name } = req.body;
    const autor = await Autor.create({ name });
    return res.json(autor);
  }
  async getAll(req, res) {
    const autors = await Autor.findAll();
    return res.json(autors);
  }
  async getOne(req, res) {
    const { id } = req.params;
    if (!id) {
      return next(ApiError.badRequest('Не задан ID'));
    }
    const autor = await Autor.findByPk(id);
    return res.json(autor);
  }
  async delete(req, res) {
    const { id } = req.params;
    if (!id) {
      return next(ApiError.badRequest('Не задан ID'));
    }
    const autor = await Autor.destroy({ where: { id: id } });
    return res.json(autor);
  }
}

module.exports = new AutorController();
