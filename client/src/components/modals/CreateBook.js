import { observer } from 'mobx-react-lite';
import React, { useContext, useState, useEffect } from 'react';
import { Button, Modal, Form, Dropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { Context } from '../../index';
import { fetchTypes, fetchGenres, createBook } from '../../http/bookAPI';

const CreateBook = observer(({ show, onHide }) => {
  useEffect(() => {
    fetchTypes().then((data) => book.setTypes(data));
    fetchGenres().then((data) => book.setGenres(data));
  }, []);

  const { book } = useContext(Context);

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [page, setPage] = useState(0);
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addBook = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('pages', `${page}`);
    formData.append('price', `${price}`);
    formData.append('rating', 0);
    formData.append('img', file);
    formData.append('bookTypeId', book.selectedType.id);
    formData.append('bookGenreId', book.selectedGenre.id);
    formData.append('autorId', book.selectedAuthor.id);
    createBook(formData).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Добавить книгу</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className='d-flex justify-content-between'>
            <Dropdown className='m-3'>
              <DropdownToggle>{book.selectedType.name || 'Выберите тип'}</DropdownToggle>
              <DropdownMenu>
                {book.types.map((type) => (
                  <DropdownItem onClick={() => book.setSelectedType(type)} key={type.id}>
                    {type.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown className='m-3'>
              <DropdownToggle>{book.selectedGenre.name || 'Выберите Жанр'}</DropdownToggle>
              <DropdownMenu>
                {book.genres.map((genre) => (
                  <DropdownItem onClick={() => book.setSelectedGenre(genre)} key={genre.id}>
                    {genre.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown className='m-3'>
              <DropdownToggle>{book.selectedAuthor.name || 'Выберите автора'}</DropdownToggle>
              <DropdownMenu>
                {book.authors.map((autor) => (
                  <DropdownItem onClick={() => book.setSelectedAuthor(autor)} key={autor.id}>
                    {autor.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
          <Form.Control
            className='mt-3'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Введите название книги'
          />
          <Form.Control
            value={page}
            onChange={(e) => setPage(Number(e.target.value))}
            className='mt-3'
            type='number'
            placeholder='Введите количество страниц в книге'
          />
          <Form.Control
            className='mt-3'
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            type='number'
            placeholder='Введите стоимость книги'
          />
          <Form.Control
            className='mt-3'
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Введите описание книги '
          />
          <Form.Control
            className='mt-3'
            type='file'
            onChange={selectFile}
            placeholder='Выберите обложку книги'
          />
          <hr />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>
          Закрыть
        </Button>
        <Button variant='outline-success' onClick={addBook}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateBook;
