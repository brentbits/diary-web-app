import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { HashRouter, Link, Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Account from './Account';
import Login from './Login';
import ProtectedRoutes from "./ProtectedRoutes";

function Header() {
    return (
      <div>
            <HashRouter>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Container>
                  <Navbar.Brand href="/diary-web-app/#/home">MyDiary-app</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="/diary-web-app/#/home">Home</Nav.Link>
                      <Nav.Link href="/diary-web-app/#/about">About us</Nav.Link>
                      <NavDropdown title="Profile" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/diary-web-app/#/account">Account</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/diary-web-app/#/login">Logout</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Nav>
                      <Nav.Link eventKey="disabled" disabled>Signed in as:</Nav.Link>
                      <Nav.Link eventKey="disabled" disabled>
                        User's Name
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                  </Container>
                </Navbar>
                <Routes>
                  <Route element={<ProtectedRoutes />}>
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/account" element={<Account />} />
                    <Route exact path="/" element={<Home />} />
                  </Route>
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/login" element={<Login />} />
                </Routes>
            </HashRouter>
      </div>
    );
  }
  
  export default Header;