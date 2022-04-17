import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Context } from '..';
import BookList from '../components/BookList';
import GenreBar from '../components/GenreBar';
import TypeBar from '../components/TypeBar';
import { fetchTypes, fetchGenres, fetchBooks } from '../http/bookAPI';

const Shop = observer(() => {
  const { book } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => book.setTypes(data));
    fetchGenres().then((data) => book.setGenres(data));
    fetchBooks().then((data) => book.setBooks(data.rows));
  }, []);
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <GenreBar />
          <BookList />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
