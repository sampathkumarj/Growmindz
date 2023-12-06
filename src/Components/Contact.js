import React from 'react'
//import { Container } from 'react-bootstrap/lib/Tab';
import Container from 'react-bootstrap/Container';

function Contact() {
  return (
    <div className='Contact'>
      <Container>
        <div className='text-center'>
      <h1 className='text-center text-info'>Contact</h1><hr/>
        
      <div className='row '>
              <div className='col-md-6'>
              <h4 className='text-primary'>Head Office</h4>
              <ul>
             <li>
              4/127-3, 1st Floor</li>
              <li>V.M.Complex, anbu nagar</li>
              <li>salem main road, Pudhansanthai,</li>
              <li>sellampatty(po), Nammakal - 637019</li>
              </ul><br/>
              <h4 className='text-primary'>Branch Office</h4>
              <ul>
             <li> Meenakshi Nilaya,</li>
             <li> 3rd cross, 3rd Street</li>
              <li> Madiwala, Bangalore</li>
              <li>  Karnataka - 560068</li>
             
              </ul>
              </div>
      <div className='col-md-6'>
        <iframe className='iframe'
        title="Google Map"
        width="350"
        height="400"
        loading="lazy"
        allowFullScreen src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15648.887171079612!2d78.1706566!3d11.318493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babc52cd21d10f3%3A0x1814dedf214845d3!2sGrowmindz%20Technologies
        !5e0!3m2!1sen!2sin!4v1701855303605!5m2!1sen!2sin">

        </iframe>
        </div>
        </div>
    
    </div>
      </Container>
    </div>
  )
}

export default Contact