import React from 'react';
import { Container, Form, Card, Button, Row } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { NavLink, useLocation } from 'react-router-dom';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 54 }}
      >
        <Card style={{ width: 600 }} className="p-5">
          <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
          <Form className="d-flex flex-column">
            <Form.Control className="mt-3" placeholder="Введите ваш Email..." />
            <Form.Control className="mt-3" placeholder="Введите ваш Password..." />

            <Row className="d-flex align-items-center justify-content-between mt-3 pe-3">
              {isLogin ? (
                <div className="w-auto">
                  Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                </div>
              ) : (
                <div className="w-auto">
                  Есть аккаунт <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div>
              )}
              <Button className="w-auto px-3  " variant="outline-success">
                {isLogin ? 'Войти' : 'Регистрация'}
              </Button>
            </Row>
          </Form>
        </Card>
      </Container>
    );
  }
};

export default Auth;
