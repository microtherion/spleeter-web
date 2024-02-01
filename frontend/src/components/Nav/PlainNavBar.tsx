import * as React from 'react';
import { Container, Row, Col, Image, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router';

/**
 * Plain navigation bar.
 */
const PlainNavBar = (): JSX.Element => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
	<Row>
	  <Col>
	    <Image src="https://woodshed.in/favicon.ico" rounded />
	  </Col>
	  <Col>
	    <Row><Navbar.Brand href="/">Spleeter Web</Navbar.Brand></Row>
	    <Row><Navbar.Brand href="https://woodshed.in">for woodshed.in</Navbar.Brand></Row>
	  </Col>
	</Row>
      </Container>
    </Navbar>
  );
};

export default withRouter(PlainNavBar);
