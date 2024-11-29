import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} md={6} lg={4}>
      <div className="proj-imgbx">
        <img className="w-[500px] h-[300px]" src={imgUrl} alt="ImageURL"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
