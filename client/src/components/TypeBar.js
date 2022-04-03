import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { ListGroup } from 'react-bootstrap';

const TypeBar = observer(() => {
  const { book } = useContext(Context);
  return (
    <ListGroup>
      {book.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          active={type.id === book.selectedType.id}
          onClick={() => book.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
