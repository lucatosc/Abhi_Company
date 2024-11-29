import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import RotatingGlobe from "../../assets/img/RotatingEarth.gif";
import '../../App.css'
import './GlitchEffect.css'
import { FlipWords } from '../../utils/FlipWords';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className="flex justify-between">
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* animated text */}
                  {/* <h1>{`STARTUP APP DEVELOPMENT`}</h1> */}
                  <h1>STARTUP</h1>
                  <h1><FlipWords
                    words={["APP", "DASHBOARD"]}
                    className="text-[#ed7d31]"
                  /></h1>
                  <h1>DEVELOPMENT</h1>
                  <h4 className="text-[#ed7d31]">{`Your One Stop Shop for your app and dashboard needs...!!`}</h4>
                  <div className="flex pt-10">
                    <a className="pr-12 no-underline flex" href="#project"> <p className="pr-3">OUR SERVICES</p> <ArrowRightCircle size={25} /></a>
                    <a className="no-underline flex" href="https://wa.me/+97455625234?text=" target="_blank" rel="noreferrer"> <p className="pr-3">WHATSAPP US</p> <ArrowRightCircle size={25} /></a>
                  </div>
                </div>
                <div className="flex justify-end max-[1024px]:hidden">
                  <div className="w-80 h-80">
                    <img src={RotatingGlobe} alt="IMAGE-EARTH" />
                  </div>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
