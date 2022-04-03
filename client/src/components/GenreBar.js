import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Card, Row } from 'react-bootstrap';

const GenreBar = observer(() => {
  const { book } = useContext(Context);
  return (
    <Row className="d-flex">
      {book.genres.map((genre) => (
        <Card
          className="p-3 m-1 w-auto"
          style={{ cursor: 'pointer' }}
          border={genre.id === book.selectedGenre.id ? 'danger' : 'light'}
          onClick={() => book.setSelectedGenre(genre)}
          key={genre.id}
        >
          {genre.name}
        </Card>
      ))}
    </Row>
  );
});

export default GenreBar;
