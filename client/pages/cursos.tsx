import React from 'react';
import MainNavbar from '../components/MainNavbar';
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  ListGroup,
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Index() {
  return (
    <div>
      <MainNavbar />
      <Container>
        <Row className="py-5"></Row>
        <Row>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Qual curso você procura?"
              className="mr-sm-2 ml-lg-3"
            />
            <Button variant="dark">Pesquisar Curso</Button>
          </Form>
        </Row>
        <Row className="mt-5">
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Row>
      </Container>
    </div>
  );
}
