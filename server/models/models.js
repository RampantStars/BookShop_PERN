const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Basket = sequelize.define('basket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketBook = sequelize.define('basketBook', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Book = sequelize.define('book', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  pages: { type: DataTypes.INTEGER, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Autor = sequelize.define('autor', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const BookType = sequelize.define('bookType', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const BookGenre = sequelize.define('bookGenre', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define('raiting', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

const TypeGenre = sequelize.define('typeGenre', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketBook);
BasketBook.belongsTo(Basket);

BookType.hasMany(Book);
Book.belongsTo(BookType);

BookGenre.hasMany(Book);
Book.belongsTo(BookGenre);

Book.hasMany(Rating);
Rating.belongsTo(Book);

Autor.hasMany(Book);
Book.belongsTo(Autor);

Book.hasMany(BasketBook);
BasketBook.belongsTo(Book);

BookType.belongsToMany(BookGenre, { through: TypeGenre });
BookGenre.belongsToMany(BookType, { through: TypeGenre });

module.exports = {
  User,
  Basket,
  BasketBook,
  Book,
  BookGenre,
  BookType,
  TypeGenre,
  Rating,
  Autor,
};
