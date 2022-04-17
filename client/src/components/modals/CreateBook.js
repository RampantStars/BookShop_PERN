import React, { useContext } from 'react';
import { Button, Modal, Form, Dropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { Context } from '../../index';

const CreateBook = ({ show, onHide }) => {
  const { book } = useContext(Context);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить книгу</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="d-flex justify-content-between">
            <Dropdown className="m-3">
              <DropdownToggle>Выберите тип</DropdownToggle>
              <DropdownMenu>
                {book.types.map((type) => (
                  <DropdownItem key={type.id}>{type.name}</DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="m-3">
              <DropdownToggle>Выберите жанр</DropdownToggle>
              <DropdownMenu>
                {book.genres.map((genre) => (
                  <DropdownItem key={genre.id}>{genre.name}</DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="m-3">
              <DropdownToggle>Выберите автора</DropdownToggle>
              <DropdownMenu>
                {book.authors.map((autor) => (
                  <DropdownItem key={autor.id}>{autor.name}</DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
          <Form.Control className="mt-3" placeholder="Введите название книги" />
          <Form.Control
            className="mt-3"
            type="number"
            placeholder="Введите количество страниц в книге"
          />
          <Form.Control className="mt-3" type="number" placeholder="Введите стоимость книги" />
          <Form.Control className="mt-3" placeholder="Введите описание книги " />
          <Form.Control className="mt-3" type="file" placeholder="Выберите обложку книги" />
          <hr />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBook;
