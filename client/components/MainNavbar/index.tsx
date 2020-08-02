import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home">Manual do Vestibulando</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline>
          <FormControl
            type="text"
            placeholder="Qual curso você procura?"
            className="mr-sm-2 ml-lg-3"
          />
          <Button variant="outline-warning">Procurar</Button>
        </Form>
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="ml-lg-5">
            Início
          </Nav.Link>
          <Nav.Link href="#link" className="ml-lg-5">
            Redações
          </Nav.Link>
          <Nav.Link href="#link" className="ml-lg-5">
            Sobre
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;
