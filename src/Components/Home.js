import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { AiOutlineSetting } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsBank } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
//import Container from 'react-bootstrap/Container'
//import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>
     <div className="bg-img-container">
      
        {/* Your content goes here */}
        <h1 className='ct1'>Mobile || Analytic || Cloud</h1>
        <p className='homep'>Forge ahead into the future through the realms of
         Enterprise Digitalization, shaping a transformative path for your business.</p>
      
      </div>
      <section className='homesection'>
        <Container fluid><h1 className='text-center'>Industries we deal with</h1>
        
        <CardGroup className="">
        <Card className='card1 text-center'>
        <Card.Body>
          <Card.Title>Manufacturing</Card.Title><hr/>
          <Card.Text>
            <span> <AiOutlineSetting/></span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card1 text-center'>
        <Card.Body>
          <Card.Title>Banking</Card.Title><hr/>
          <Card.Text>
           <span><BsBank/></span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card1 text-center'>
        <Card.Body>
          <Card.Title>e-Commerce</Card.Title><hr/>
          <Card.Text>
           <span><AiOutlineShoppingCart/></span>
          </Card.Text>
        </Card.Body>
       
      </Card>  
    </CardGroup>
    <br/>
    <CardGroup className='g-4'>
        <Card className='card1 text-center'>
        <Card.Body>
          <Card.Title><h3>Logistics</h3></Card.Title><hr/>
          <Card.Text>
            <span><AiOutlineLineChart/></span> 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card1 text-center '>
        <Card.Body>
          <Card.Title><h3>Insurance</h3></Card.Title><hr/>
          <Card.Text>
         <span><IoHome/></span> 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card1 text-center'>
        <Card.Body>
          <Card.Title><h3>Inventory</h3></Card.Title><hr/>
          <Card.Text>
           <span><AiOutlineAppstore/></span>
          </Card.Text>
        </Card.Body>
       
      </Card>  
    </CardGroup>
        </Container>
        
      </section>
      </div>
  )}
export default Home