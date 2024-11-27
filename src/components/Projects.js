import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1_dash from "../assets/img/project1-dash.png";
import proj2_dash from "../assets/img/project2-dash.png";
import proj3_dash from "../assets/img/project3-dash.png";
import proj4_dash from "../assets/img/project4-dash.png";
import proj5_dash from "../assets/img/project5-dash.png";
import proj6_dash from "../assets/img/project6-dash.png";
import proj1_app from "../assets/img/project1-app.png";
import proj2_app from "../assets/img/project2-app.gif";
import proj3_app from "../assets/img/project3-app.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const dash_projects = [
    {
      title: "Ecommerce Dashboard",
      description: "Design & Development",
      imgUrl: proj1_dash,
    },
    {
      title: "Wealth Dashboard",
      description: "Design & Development",
      imgUrl: proj2_dash,
    },
    {
      title: "Weather Dashboard",
      description: "Design & Development",
      imgUrl: proj3_dash,
    },
    {
      title: "Shop Dashboard",
      description: "Design & Development",
      imgUrl: proj4_dash,
    },
    {
      title: "Finance Dashboard",
      description: "Design & Development",
      imgUrl: proj5_dash,
    },
    {
      title: "Ecommerce Dashboard",
      description: "Design & Development",
      imgUrl: proj6_dash,
    },
  ];

  const app_projects = [
    {
      title: "Architecture App",
      description: "Design & Development",
      imgUrl: proj1_app,
    },
    {
      title: "Business App",
      description: "Design & Development",
      imgUrl: proj2_app,
    },
    {
      title: "Ecommerce App",
      description: "Design & Development",
      imgUrl: proj3_app,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h4>Build Your Dream</h4>
                <h2 className="pb-5">Quality Services</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">ALL</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">DASHBOARD</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">MOBILE APP</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          dash_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        {
                          app_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          dash_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          app_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="BackgroundImage"/>
    </section>
  )
}
