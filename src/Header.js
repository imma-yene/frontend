import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import ParticlesBg from "particles-bg";

import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';


function Header(){

    return (
      <div className="heade" id="heade" >
 <ParticlesBg type="cobweb" bg={true} className="particl" />
        <Navbar collapseOnSelect expand="lg" bg="#1A73E8" variant="dark"  className="navb">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/crud">About us </Nav.Link>
              <Nav.Link href="/crud"> Crud </Nav.Link>
            </Nav>
            <Nav>
          <Nav.Link href="#deets">Sign up</Nav.Link>  
         <Nav.Link eventKey={2} href="#memes">
              sign in
            </Nav.Link>
           
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
      <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
   </div>
    )
}
export default Header;