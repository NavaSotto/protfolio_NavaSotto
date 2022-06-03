import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/Particle/Particle";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Techstack from "./Techstack";
import './style.css';
import { FaRegAddressCard } from "react-icons/fa";



function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="title2">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <FaRegAddressCard className="aboutImg" size={250} font-weight="2" font-size="14px"
              color="#d18ab085" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="title2">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="title2">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>

  );
}

export default About;
