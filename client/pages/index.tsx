import React from 'react';
import MainNavbar from '../components/MainNavbar';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Index() {
  return (
    <div>
      <MainNavbar />
      <Container>
        <Row className="py-5"></Row>
        <Row>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tempus tellus id quam aliquam, vitae bibendum tellus
              suscipit. Cras fermentum blandit dui ac auctor. Suspendisse
              malesuada ut dui sed volutpat. Maecenas bibendum rutrum velit id
              eleifend. Nunc id massa lorem. Nulla posuere sed urna sed ornare.
              Suspendisse sed nulla et felis bibendum tempus nec a turpis.
              Quisque quis lectus lectus. Maecenas auctor efficitur dui vel
              varius.
            </p>
          </Col>
          <Col>
            <img
              src="/logo_usp.png"
              className="img-fluid"
              alt="Responsive image"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src="/foto_usp.jpg"
              className="img-fluid"
              alt="Responsive image"
            />
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tempus tellus id quam aliquam, vitae bibendum tellus
              suscipit. Cras fermentum blandit dui ac auctor. Suspendisse
              malesuada ut dui sed volutpat. Maecenas bibendum rutrum velit id
              eleifend. Nunc id massa lorem. Nulla posuere sed urna sed ornare.
              Suspendisse sed nulla et felis bibendum tempus nec a turpis.
              Quisque quis lectus lectus. Maecenas auctor efficitur dui vel
              varius.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
