// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import React, { Components } from "react";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
//import Navbar from './Components/Nav1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
//import {Footer, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Footer from 'react-bootstrap/Footer';
import Container from 'react-bootstrap/Container';
const App = () => {
  return (
    
      <div>
        <BrowserRouter>
       <Navbar/>
       
        <div className="">
       
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/services"element={<Services/>} />
            <Route path="/contact" element={<Contact/>} />
            </Routes>
            
        </div>
        </BrowserRouter>
        

      <section className=''>
        <Container fluid className=' foot1 text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                Growmindz
                
              </h6>
              <p>
              We help businesses successfully navigate digital transformation and drive
               real growth, drawing on the combined power of experience and 
              contextual knowledge, across a vast ecosystem of expertise.
              </p>
            </Col>

            <Col md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Web Development
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Software Development
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Cyber Security
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Ui/ux Design
                </a>
              </p>
            </Col>

            <Col md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </Col>

            <Col md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              
              <p color='secondary' icon='envelope' className='me-3' >
               Email: admin@Growmindz.com
              </p>
              <p
                 color='secondary' icon='phone' className='me-3' >  Phone: +91 9916 2160 66
              </p>
           
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='http://www.growmindz.com/'>
        Growmindz Technologies
        </a>
      </div>
    
      </div>
    
  );
};

export default App;
