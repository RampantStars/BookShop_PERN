import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookList from '../components/BookList';
import GenreBar from '../components/GenreBar';
import TypeBar from '../components/TypeBar';

const Shop = () => {
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
};

export default Shop;
