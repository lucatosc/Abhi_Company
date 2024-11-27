import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Resume from '../assets/resume/sample.pdf';
// import Toggle from "./Toggle";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
// import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

const logoStyle = {
  color: "white",
}

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
    {/*Navbar start*/}
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} >
        <Container>
          <Navbar.Brand href="/">
            <div className="w-16 h-16 flex items-center">
              <img src="/Logo.png" alt="Logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#sevices" className={activeLink === 'sevices' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('sevices')}>Sevices</Nav.Link>
              <Nav.Link href="#contact_us" className={activeLink === 'contact_us' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact_us')}>Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{/*Navbar End*/}
    </Router>
  )
}
