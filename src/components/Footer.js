import { Container, Row, Col } from "react-bootstrap";

import linkedin from "../assets/images/linkedin.png";
import git from "../assets/images/github.png";
import cv from "../assets/images/cv.png";
import leetcode from "../assets/images/leetcode.png";
import resume from '../assets/pdf/Resume.pdf';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
            <p>Copyright (c) 2023 Devansh Jain</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href={resume} download="Devansh_Jain_Resume.pdf" className="resume">
                    <img src={cv} alt="resume" />
                  </a>
              <a href="https://github.com/devansh19jain" target="_blank"><img src={git} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/devansh-jain-8019b4227/" target="_blank"><img src={linkedin} alt="Icon" /></a>
              <a href="https://leetcode.com/d1910j/" target="_blank"><img src={leetcode} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}