import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import myImg from "../../Assets/avatar.svg";
import "./style.css";


import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="title2"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My name is Nava Sotto.
              <br />I am a junior Full Stack Developer developer.<br />
              I invite you to be impressed by my portfolio 🤩
              <br />
              <br />
              Here you will understand more about who I am,              <br />

              Take a look at projects I have implemented,              <br />

              find out what  languages and technologies I learned,
         <br />

              and download my CV file.              <br /> <br />
              Enjoy 🙌

            </p>
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="title2">FIND ME ON</h1>
            <p className="title4">
              Feel free to <span  className="largeText " >connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/NavaSotto"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nava-sotto//"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto: sottonava@gmail.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
