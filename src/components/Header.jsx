import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar
      expand='lg'
      className='bg-body-tertiary custom-navbar'
      onClick={(e) => {
        console.log(e.target);
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to={'/'}>
          {'<Dev />'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='justify-content-center' style={{ width: '100%' }}>
            <Nav.Link
              as={NavLink}
              to={`/`}
              className='px-4 custom-navbar-border'
            >
              All
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={`fullStack`}
              className='px-4 custom-navbar-border'
            >
              Full Stack Development
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={`datascience`}
              className='px-4 custom-navbar-border'
            >
              Data Science
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={`cybersecurity`}
              className='px-4 custom-navbar-border'
            >
              Cyber Security
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={`careers`}
              className='px-4 custom-navbar-border'
            >
              Careers
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
