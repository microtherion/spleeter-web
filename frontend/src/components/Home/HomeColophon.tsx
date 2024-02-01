import * as React from 'react';
import { Button, Container, Row, Col, Navbar, Nav, Image } from 'react-bootstrap';
import { withRouter, RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps {
  onUploadClick: () => void;
}

/**
 * Navigation bar with upload button.
 */
const HomeColophon = (props: Props): JSX.Element => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container fluid>
	<Nav fill>
	    <Nav.Link href="https://github.com/JeffreyCA/spleeter-web">
	    	 Frontend: Spleeter Web
            </Nav.Link>
	    <Nav.Link href="https://github.com/deezer/spleeter">
	    	 Backend: Spleeter
            </Nav.Link>
	</Nav>
      </Container>
    </Navbar>
  );
};

export default withRouter(HomeColophon);
