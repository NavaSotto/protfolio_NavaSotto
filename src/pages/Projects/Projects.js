
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../components/Particle/Particle";

import exercisesImg from "../../Assets/Projects/Exercises/img2.jpg";
import storeImg from "../../Assets/Projects/Store/img1.jpg";
import todolistImg from "../../Assets/Projects/ToDoList/img2.jpg";
import countriesImg from "../../Assets/Projects/Countries/img1.png";
import triviaImg from "../../Assets/Projects/Trivia/img1.png";
import sim_justmoveImg from "../../Assets/Projects/Sim-justmove/img9.png";
import xonixImg from "../../Assets/Projects/Xonix/img1.png";
import pacmanImg from "../../Assets/Projects/Pacman/img1.png";
import './style.css';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="title2">
          My Recent <strong className="title2">Works </strong>
        </h1>
        <p className="whiteP">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              id="project1"
              imgPath={exercisesImg}
              title="Programming practice platform"
              description="A platform for practicing code in different programming languages.
              The exercises contain explanations, solutions and allow you to reach the level of a master.
              End-to-end development, includes user management system where the Admin user can edit an exercise and  
              registered users can view solutions."
              link="https://github.com/NavaSotto/programming-practice-platform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              id="project2"
              imgPath={storeImg}
              title="store"
              description="An online store where you can select a category and view all the products in the same category, filter products and get information about a particular item."
              link="https://github.com/NavaSotto/MyStore"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              id="project3"
              imgPath={countriesImg}
              title="Countries"
              description="A site where you can travel the world and get information about any country you choose.
              You can also watch the current weather updated depending on your location."
              link="https://github.com/NavaSotto/countries_project"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              id="project4"
              imgPath={triviaImg}
              title="Trivia Game"
              description="A tool for creating custom trivia quizzes. A desktop version of the familiar ‘Kahoot’ game." link="https://github.com/NavaSotto/Trivia-game"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              id="project5"
              imgPath={todolistImg}
              title="ToDoList"
              description="A web application platform that allows you to save your daily tasks so as not to miss anything."
              link="https://github.com/NavaSotto/ToDoList"

            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              id="project6"
              imgPath={sim_justmoveImg}
              title="Simontoric-JustMove"
              description="Rehabilitation tool for strengthening the shoulder girdle and memory in response to sports injuries."
              link="https://github.com/NavaSotto/Simontoric-JustMove"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              id="project7"
              imgPath={xonixImg}
              title="xonix game"
              description="Implementation of Xonix game. The objective of the game is to draw rectangles in the space that occupies the main section of the screen while you avoid the enemies, both in the margins and on the drawable section, which can kill you on contact."
              link="https://github.com/NavaSotto/Xonix"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              id="project8"
              imgPath={pacmanImg}
              title="Pacman game"
              description="Implementation of a classic arcade game-Pac-Man. The game features pac-man navigation through a maze. Your goal is for Peck-Man to eat all the balls (white circles) while avoiding the ghosts that chase after him. If ever a ghost catches Pac-Man then Pac-Man is defeated."
              link="https://github.com/NavaSotto/Pacman"
            />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
