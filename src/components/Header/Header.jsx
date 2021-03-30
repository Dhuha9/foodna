import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import foodnaLogo from '../../foodnaLogo.png';
import { Link } from 'react-router-dom';
import Login from '../OAuth/Login';
import Logout from '../OAuth/Logout';

const navItems = [
  { title: 'Recieve Food', path: '/meals' },
  { title: 'Donate Food', path: '/donate' },
  { title: 'About', path: '/about' },
];

export default function Header() {
  const [user, setuser] = useState(
    JSON.parse(localStorage.getItem('currentUser'))
  );

  const handleUser = () => {
    const newUserState = JSON.parse(localStorage.getItem('currentUser'));
    setuser(newUserState);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand as={Link} to="/" className="mx-2">
        <img alt="" src={foodnaLogo} width="150" height="50" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          {navItems.map((navItme, indx) => (
            <Nav.Link as={Link} to={navItme.path} key={indx} className="ml-4">
              {navItme.title}
            </Nav.Link>
          ))}
        </Nav>
        <Nav className="mx-4">
          {user ? (
            <Logout handleUser={handleUser} />
          ) : (
            <Login handleUser={handleUser} />
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
