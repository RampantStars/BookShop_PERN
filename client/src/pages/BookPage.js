import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import bigStar from '../assets/star.svg';

const BookPage = () => {
  const book = {
    id: 1,
    name: 'Приключения Тома Соера',
    description:
      'asdkjhaskfjgahlfdgajsk  fhdkjfhgdskjfhgdsfsdfgjhdfgdksjhgfdsjhfgsfh geutyrweygrkjhdfgkhsdgfkjhdsgfk hfgdsjhfgsdhfgnvccbnxvcnxbvnbvhk fgsfgsefgsjkehgfeks ugfeiysfgsjebfkjsehgfuyesiifyesg',
    pages: 200,
    price: 150,
    rating: 5,
    img: 'https://i.pinimg.com/564x/32/ae/35/32ae357bb1b3cee6d95dd171ab81baaf.jpg',
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={book.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{book.name}</h2>
            <div
              style={{
                width: 240,
                height: 240,
                background: `url(${bigStar}) no-repeat center center`,
                backgroundSize: 'cover',
                fontSize: 64,
              }}
              className="d-flex align-items-center justify-content-center"
            >
              {book.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid gray',
              borderRadius: 20,
            }}
          >
            <h3>Cтраниц: {book.pages} </h3>
            <h3>От: {book.price} рублей</h3>
            <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-5">
        <h3 className=" p-0">Описание</h3>
        <Row className="d-inline mt-2 fs-4">{book.description}</Row>
      </Row>
    </Container>
  );
};

export default BookPage;
