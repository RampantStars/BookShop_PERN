import { makeAutoObservable } from 'mobx';

export default class BookStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Книга' },
      { id: 2, name: 'Манга' },
      { id: 3, name: 'Манхва' },
      { id: 4, name: 'Энциклопедия' },
    ];
    this._genres = [
      { id: 1, name: 'Приключения' },
      { id: 2, name: 'Фентези' },
    ];
    this._books = [
      {
        id: 1,
        name: 'Приключения Тома Соера',
        description: 'test1',
        pages: 200,
        price: 150,
        rating: 5,
        img: 'https://i.pinimg.com/564x/32/ae/35/32ae357bb1b3cee6d95dd171ab81baaf.jpg',
      },
      {
        id: 2,
        name: 'Соера',
        description: 'test1',
        pages: 210,
        price: 60,
        rating: 5,
        img: 'https://i.pinimg.com/564x/32/ae/35/32ae357bb1b3cee6d95dd171ab81baaf.jpg',
      },
      {
        id: 3,
        name: 'Приключения  Соера',
        description: 'test1',
        pages: 20,
        price: 160,
        rating: 5,
        img: 'https://i.pinimg.com/564x/32/ae/35/32ae357bb1b3cee6d95dd171ab81baaf.jpg',
      },
    ];

    this._selectedType = {};
    this._selectedGenre = {};
    makeAutoObservable(this);
  }

  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedGenre(genre) {
    this._selectedGenre = genre;
  }
  setTypes(types) {
    this._types = types;
  }
  setGenres(genres) {
    this._genres = genres;
  }
  setBooks(books) {
    this._books = books;
  }

  get selectedType() {
    return this._selectedType;
  }
  get selectedGenre() {
    return this._selectedGenre;
  }
  get types() {
    return this._types;
  }
  get genres() {
    return this._genres;
  }
  get books() {
    return this._books;
  }
}
