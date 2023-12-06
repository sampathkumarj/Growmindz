import React from 'react';
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

function Services() {
  return (
    <div className='Services'>
      <Container>
        <div className='Serivces'>
          <h1 className='text-info text-center'>Services</h1><hr/>
      <div className='row'>
              <div className='col-md-6'>
             <h2 className='ser'>Organizational Digitalization</h2> 
              <img src="org4.jpg" className='img-fluid w-100'></img>
               <h5 className='ser1'>It is not about automation of simple tasks but
                 digitizing the business process, the DNA of organization.</h5>
              </div>
        <div className='col-md-6'>
              <h2 className='ser'>High UX Mobile Apps</h2>
              <img src="ux4.jpg" className='img-fluid w-100'></img>
              <h5 className='ser1'>Build 'Mobile-First' apps with the latest
               technologies and tools. From native code to hybrid multi-platform apps, 
               we do them all in OneSoft.

              </h5>
       </div>
       </div>
      
      <div className='row'>
              <div className='col-md-6'>
              <h2 className='ser'>Enterprise Solutions</h2>
              <img src="ep.jpg" className='img-fluid w-100'></img>
              <h5 className='ser1'>Create intuitive Enterprise apps that stand out to sell your business.
               We deliver cross browser and high user experience apps and sites.</h5>
              </div>
        <div className='col-md-6'>
        <h2 className='ser'>Data Analytics and Robotics</h2>
        <img src="data1.jpg"className='img-fluid w-100'></img>
              <h5 className='ser1'>Perform analytics on your data to get excellent 
              insight into your business intricacies. 
              Combine them with Machine Learning as well.</h5>
       </div>
       </div>
       </div>
    </Container>
    </div>
   
  )
}

export default Services;