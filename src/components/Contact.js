import React, {useRef} from 'react';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_vzn11uh','template_2c7cjyg',form.current,'0Kgm2XmCCcgAS-PIx')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    setButtonText("Sent...");
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h4>WHAT ARE YOU WAITING FOR...</h4>
                <div className='pb-4 flex justify-center'>
                  <h2>Make an appointment</h2>
                </div>
                <div>
                  <h4 className='pb-3'>OUR LOCATION</h4>
                  <p>New York, NY 1016, United States.</p> 
                </div>
                <Row>
                  <Col size={12} md={6}>
                    <h4 className='pb-3'>OPENING HOURS</h4>
                    <p>Mon-Fri: 6am~10pm</p>
                    <p>Sat-Sun: 8am-2pm</p>
                  </Col>
                  <Col size={12} md={6}>
                    <h4 className='pb-3'>CONTACT</h4>
                    <p>Phone: +1 234 456 7890</p>
                    <p>Email: mail@example.com</p>
                  </Col>
                </Row>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="first_name" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="last_name" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name='email' value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name='title' value={formDetails.title} placeholder="Title" onChange={(e) => onFormUpdate('title', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea name="message" rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <div className='pb-4 flex justify-center'>
              <h2>ABOUT US</h2>
            </div>
            <Row>
              <Col size={12} md={8}>
                <h4 className='pb-3'>OUR LOCATION  </h4>
                <p>B174</p>    
                <p>Vivek Vihar Ph 1</p>    
                <p>Delhi</p>    
                <p>India-110095</p>    
              </Col>
              <Col size={12} md={4}>
                <h4 className='pb-3'>Contact</h4>
                <p>www.ayamtechs.com</p>
                <p>info@ayamtechs.com</p>
                <p>+91 956447688</p>
                <p>+974 55625234</p>
              </Col>
            </Row>
            <TrackVisibility>
              {({ isVisible }) =>    
                <iframe
                    width="100%"
                    height="500px"
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62217.443499287576!2d77.56961776313786!3d12.934038420296405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c87627a8e9%3A0x895356f8182066d!2sNewton%20School!5e0!3m2!1sen!2sin!4v1674068898024!5m2!1sen!2sin"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}