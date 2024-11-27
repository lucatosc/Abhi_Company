import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import RotatingGlobe from "../../assets/img/RotatingEarth.gif";
import '../../App.css'
import './GlitchEffect.css'


export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* animated text */}
                <h1>{`STARTUP APP DEVELOPMENT`}</h1>
                <h4 className="text-[#ed7d31]">{`Your One Stop Shop for your app needs...!!`}</h4>
                <div className="flex pt-10">
                  <a className="pr-12 no-underline flex" href="#project"> <p className="pr-3">OUR SERVICES</p> <ArrowRightCircle size={25} /></a>
                  <a className="no-underline flex" href="https://www.whatsapp.com/"> <p className="pr-3">WHATSAPP US</p> <ArrowRightCircle size={25} /></a>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="flex justify-end">
              <div className="w-80 h-80">
                <img src={RotatingGlobe} alt="IMAGE-EARTH" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
