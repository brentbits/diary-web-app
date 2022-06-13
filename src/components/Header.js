import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
//import {BrowserRouter as Router, Link} from 'react-router-dom';

function Header(){
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">MyDiary-app</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About us</Nav.Link>
      <NavDropdown title="Profile" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Signed in as:</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Brent
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
}

export default Header;