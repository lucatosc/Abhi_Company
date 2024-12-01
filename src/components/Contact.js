import React, {useRef} from 'react';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6bvkhh5','template_e8r1r9d',form.current, '_ZlCBW3o03LPC8rhq')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    
    setButtonText("Sent...");

    setTimeout(() => {
      setButtonText("Send");
      setFormDetails(formInitialDetails);
    }, 1500);
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col size={12} md={6}>
            <TrackVisibility className='m-2'>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className='pb-4 flex justify-center'>
                  <h2>CONTACT US</h2>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                  <input className='my-2' type="text" name="name" value={formDetails.name} placeholder="Enter your name" onChange={(e) => onFormUpdate('name', e.target.value)} />
                  <input className='my-2' type="email" name='email' value={formDetails.email} placeholder="Enter your email address" onChange={(e) => onFormUpdate('email', e.target.value)} required/>
                  <input className='my-2' type="text" name='subject' value={formDetails.subject} placeholder="Subject" onChange={(e) => onFormUpdate('subject', e.target.value)}/>
                  <textarea className='my-2' name="message" rows="6" value={formDetails.message} placeholder="Thank you. Someone will revert to your message soon." onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                  <div className='flex justify-center'><button type="submit"><span>{buttonText}</span></button></div>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6} className='max-md:pt-20'>
            <TrackVisibility className='m-2'>
              {({ isVisible }) =>
              <>    
                <div className='pb-4 flex justify-center'>
                  <h2>ABOUT US</h2>
                </div>
                <Row className='pb-3'>
                  <Col size={12} xs={6}>
                    <div>
                      <div className='pb-1 flex'><div className='w-8 h-8'><img src='/location.png' alt='location'/></div><h4>OUR LOCATION</h4></div>
                      <p className='mb-1 email_block'>B174</p>    
                      <p className='mb-1 email_block'>Vivek Vihar Ph 1</p>    
                      <p className='mb-1 email_block'>Delhi</p>    
                      <p className='mb-1 email_block'>India-110095</p>
                    </div>
                  </Col>
                  <Col size={12} xs={6}>
                    <div>
                      <div className='pb-1 flex justify-end'><div className='w-8 h-8'><img src='/contact.png' alt='contact'/></div><h4>CONTACT US</h4></div>
                      <a href='http://www.ayamtechs.com/' className='no-underline text-white email_block flex justify-end'>www.ayamtechs.com</a>
                      <p className='mb-1 flex justify-end pt-1 email_block'>info@ayamtechs.com</p>
                      <p className='mb-1 flex justify-end email_block'>+91956447688</p>
                      <p className='mb-1 flex justify-end email_block'>+97455625234</p>
                    </div>
                  </Col>
                </Row>
                <iframe
                    width="100%"
                    height="390px"
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.6227588374672!2d77.31709117617326!3d28.6710120756438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbdaf48eccd1%3A0x7862a8305904e99!2sAyam%20Tech!5e0!3m2!1sen!2sqa!4v1732886410616!5m2!1sen!2sqa"
                    loading="lazy"
                ></iframe>
              </>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <div className='max-sm:block flex justify-center pt-32'><div className='flex justify-center'><h5>© 2024 Ayam Tech India Pvt Ltd., </h5></div><div className='flex justify-center'><h5>Delhi, India.</h5></div></div>
    </section>
  )
}
