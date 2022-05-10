import { makeAutoObservable } from 'mobx';

export default class BookStore {
  constructor() {
    this._types = [];
    this._genres = [];

    this._author = [
      { id: 1, name: 'Л.Н.Толсой' },
      { id: 2, name: 'А.П.Чехов' },
      { id: 3, name: 'А.П.Чехов' },
    ];
    this._books = [];

    this._selectedType = {};
    this._selectedGenre = {};
    this._selectedAuthor = {};
    makeAutoObservable(this);
  }

  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedGenre(genre) {
    this._selectedGenre = genre;
  }
  setSelectedAuthor(author) {
    this._selectedAuthor = author;
  }
  setTypes(types) {
    this._types = types;
  }
  setGenres(genres) {
    this._genres = genres;
  }
  setAuthors(authors) {
    this._author = authors;
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
  get selectedAuthor() {
    return this._selectedAuthor;
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
  get authors() {
    return this._author;
  }
}
