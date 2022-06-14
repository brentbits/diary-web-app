import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { HashRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';

function App() {
  return (
    <div>
          <HashRouter>
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/#/">MyDiary-app</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/#/home">Home</Nav.Link>
                    <Nav.Link href="/#/about">About us</Nav.Link>
                    <NavDropdown title="Profile" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="/account">Account</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/#/login">Logout</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#accnt">Signed in as:</Nav.Link>
                    <Nav.Link eventKey={2} href="#user">
                      Brent
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
                </Container>
              </Navbar>
              <Routes>
                  <Route exact path="/home" element={<Home />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/" element={<Home />} />
                </Routes>
          </HashRouter>
    </div>
  );
}

export default App;
