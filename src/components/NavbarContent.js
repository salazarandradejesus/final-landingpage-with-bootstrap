import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function NavContent() {
    return (
      <div className="NavContentApp">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">4Geeks Academy | Jesus Salazar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Home</Nav.Link>
                <Nav.Link href="#deets">About</Nav.Link>
                <Nav.Link href="#deets">Services</Nav.Link>
                <Nav.Link href="#deets">Contact</Nav.Link>
                </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>
    )
  }

  export default NavContent