// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import  Container  from 'react-dom';
//impport from 'react';{ Container } from 'react-dom';
import Container from 'react-bootstrap/Container'; 
import { RiContactsBookFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
function Navigation (){
  return (
   
    <Navbar className="navbar1"expand="lg"id='#navbar'>
      <Container fluid className='nav1'>
      <Navbar.Brand className="brand"><h1 >Growmind<a id="z">Z</a></h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"className='justify-content-end'>
        <Nav className='navlink'id="nvlink">
  
          <Nav.Link as={Link} to="/" className='nav1  fw-bold '><span><IoHome /></span>Home</Nav.Link>
          <Nav.Link as={Link} to="/About"className='nav1 fw-bold '><span><FaSearch /></span>About</Nav.Link>
          <Nav.Link as={Link} to="/services"className=' nav1 fw-bold '><span><FaWrench /></span>Services</Nav.Link>
          <Nav.Link as={Link} to="/contact"className=' nav1 fw-bold'><span><RiContactsBookFill /></span>Contact</Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
    
  );
};

export default Navigation;
