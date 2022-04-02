const uuid = require('uuid');
const path = require('path');
const { Book } = require('../models/models');
const ApiError = require('../error/apiError');
const { application } = require('express');

class BookController {
  async create(req, res, next) {
    try {
      const { name, description, pages, price, autorId, bookTypeId, bookGenreId } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const book = await Book.create({
        name,
        description,
        pages,
        price,
        autorId,
        bookTypeId,
        bookGenreId,
        img: fileName,
      });
      return res.json(book);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let { bookGenreId, bookTypeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;
    let book;
    if (!bookGenreId && !bookTypeId) {
      book = await Book.findAndCountAll({ limit, offset });
    }
    if (bookGenreId && !bookTypeId) {
      book = await Book.findAndCountAll({ where: { bookGenreId, limit, offset } });
    }

    if (!bookGenreId && bookTypeId) {
      book = await Book.findAndCountAll({ where: { bookTypeId, limit, offset } });
    }
    if (bookGenreId && bookTypeId) {
      book = await Book.findAndCountAll({ where: { bookGenreId, bookTypeId, limit, offset } });
    }
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
