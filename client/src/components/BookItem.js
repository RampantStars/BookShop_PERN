import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import star from '../assets/star.svg';
import { BOOK_ROUTE } from '../utils/consts';

const BookItem = ({ book }) => {
  const history = useNavigate();
  return (
    <Col md={3} onClick={() => history(BOOK_ROUTE + '/' + book.id)}>
      <Card className='mt-4' style={{ width: 200, cursor: 'pointer' }} border={'light'}>
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + '/' + book.img} />
        <div className='d-flex mt-1 justify-content-between align-items-center'>
          <div className='text-black-50'>sadasdsad</div>
          <div className='d-flex align-items-center'>
            <div>{book.rating}</div>
            <Image className='mx-1' width={15} height={15} src={star} />
          </div>
        </div>
        <div className='mt-1' style={{ textAlign: 'center' }}>
          {book.name}
        </div>
      </Card>
    </Col>
  );
};

export default BookItem;
