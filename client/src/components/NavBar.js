import React, { useContext } from 'react';
import { Context } from '../';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>
          BookShop
        </NavLink>
        {user.isAuth ? (
          <Nav className="ms-auto" style={{ color: 'white' }}>
            <Button variant="outline-light" onClick={() => history(ADMIN_ROUTE)}>
              Админ панель
            </Button>
            <Button variant="outline-light" className="ms-2" onClick={() => logOut()}>
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant="outline-light" onClick={() => history(LOGIN_ROUTE)}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
