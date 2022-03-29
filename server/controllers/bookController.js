const uuid = require('uuid');
const path = require('path');
const { Book } = require('../models/models');
const ApiError = require('../error/apiError');
const { application } = require('express');

class BookController {
  async create(req, res, next) {
    try {
      const { name, description, pages, price, autorId, typeId, generId } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const book = await Book.create({ name, description, pages, price, autorId, typeId, generId, img: fileName });
      return res.json(book);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    const book = await Book.findAll();
    return res.json(book);
  }
  async getOne(req, res) {
    const { id } = req.params;
    if (!id) {
      return next(ApiError.badRequest('Не задан ID'));
    }
    const book = await Book.findByPk(id);
    return res.json(book);
  }
  async delete(req, res) {
    const { id } = req.params;
    if (!id) {
      return next(ApiError.badRequest('Не задан ID'));
    }
    const book = await Book.destroy({ where: { id: id } });
    return res.json(book);
  }
}

module.exports = new BookController();
