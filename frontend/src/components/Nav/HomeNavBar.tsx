import * as React from 'react';
import { Button, Container, Row, Col, Navbar, Nav, Image } from 'react-bootstrap';
import { CloudUpload } from 'react-bootstrap-icons';
import { withRouter, RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps {
  onUploadClick: () => void;
}

/**
 * Navigation bar with upload button.
 */
const HomeNavBar = (props: Props): JSX.Element => {
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
      <Navbar.Toggle />
      <Navbar.Collapse className="text-right">
        <Nav className="ml-auto">
          <Button onClick={props.onUploadClick} variant="success mr-3">
            Upload <CloudUpload />
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(HomeNavBar);
