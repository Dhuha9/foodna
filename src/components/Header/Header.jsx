import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import foodnaLogo from '../../foodnaLogo.png';
import { Link } from 'react-router-dom';
import Login from '../OAuth/Login';
import Logout from '../OAuth/Logout';
import { UserContext } from '../../App';
import LangButton from '../LangButton/LangButton';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const userrefresh = useContext(UserContext);
  const { t } = useTranslation();
  const navItems = [
    { title: t('NavBar.recieveFood'), path: '/meals' },
    { title: t('NavBar.donateFood'), path: '/donate' },
    { title: t('NavBar.about'), path: '/about' },
  ];
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
        <Nav className="mx-4">{userrefresh.user ? <Logout /> : <Login />}</Nav>
        <LangButton />
      </Navbar.Collapse>
    </Navbar>
  );
}
