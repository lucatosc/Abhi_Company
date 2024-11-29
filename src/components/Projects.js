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
      description: `The eCommerce dashboard provides a comprehensive overview of key performance metrics, including sales trends, customer behavior, inventory levels, and conversion rates, enabling data-driven decision-making for optimizing online retail strategies.`,
      imgUrl: proj1_dash,
    },
    {
      title: "Wealth Dashboard",
      description: `A wealth dashboard provides a comprehensive, real-time overview of your financial status, including assets, liabilities, investments, and cash flow, allowing you to make informed decisions about your financial future.

`,
      imgUrl: proj2_dash,
    },
    {
      title: "Weather Dashboard",
      description: `A weather dashboard provides real-time updates and visualizations of current weather conditions, forecasts, and severe alerts for a specific location or region.

`,
      imgUrl: proj3_dash,
    },
    {
      title: "Shop Dashboard",
      description: `Monitor your shop’s performance with real-time insights on sales, inventory, customer engagement, and trends, all in one intuitive dashboard.`,
      imgUrl: proj4_dash,
    },
    {
      title: "Finance Dashboard",
      description: `A finance dashboard provides a comprehensive, real-time overview of key financial metrics and performance indicators, enabling informed decision-making and strategic planning for businesses.`,
      imgUrl: proj5_dash,
    },
    {
      title: "Ecommerce Dashboard",
      description: `An eCommerce dashboard provides a comprehensive overview of key metrics, including sales performance, customer engagement, inventory levels, and traffic sources, enabling businesses to make data-driven decisions for growth.`,
      imgUrl: proj6_dash,
    },
  ];

  const app_projects = [
    {
      title: "Architecture App",
      description: `Explore, design, and visualize your architectural dreams with our intuitive architecture app, featuring cutting-edge tools for sketching, 3D modeling, and project collaboration.`,
      imgUrl: proj1_app,
    },
    {
      title: "Business App",
      description: `Streamline your operations and enhance productivity with our all-in-one business app designed for seamless collaboration, project management, and real-time analytics.`,
      imgUrl: proj2_app,
    },
    {
      title: "Ecommerce App",
      description: `Discover a seamless shopping experience with our intuitive eCommerce app, featuring a vast selection of products, secure payment options, and personalized recommendations just for you`,
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
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center max-md:flex-col" id="pills-tab">
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
