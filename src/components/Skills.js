import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cpp from '../assets/images/cpp.png';
import dbms from '../assets/images/DBMS.png';
import os from '../assets/images/os.png';
import cn from '../assets/images/cn.png';
import oops from '../assets/images/oops.png';
import sql from '../assets/images/sql.png';
import webdev from '../assets/images/webdev.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const skillsData = [
    { image: cpp, title: "C++" },
    { image: webdev, title: "ReactJS" },
    { image: webdev, title: "JavaScript" },
    { image: webdev, title: "Bootstrap" },
    { image: dbms, title: "DBMS" },
    { image: oops, title: "OOPs" },
    { image: os, title: "OS" },
    { image: cn, title: "CN" },
    { image: sql, title: "MySQL" },
    { image: dbms, title: "MongoDB" }
  ];
  return (
    <section className="skill" id="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>"Proficient in cutting-edge technologies and programming languages, I bring a versatile skill set to deliver innovative solutions and drive success in dynamic projects."</p>

              {/* Use the Carousel for smaller screens */}
              <Carousel responsive={responsive} infinite={true} className="skill-slider d-md-none">
                {skillsData.map((skill, index) => (
                  <div key={index}>
                    <img src={skill.image} alt={skill.title} />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>

              {/* Use grid for larger screens */}
              <div className="row g-4 d-none d-md-flex">
                {skillsData.map((skill, index) => (
                  <div key={index} className="col-md-3">
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="img-fluid skill-icon"
                    />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
