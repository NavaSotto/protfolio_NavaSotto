import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import './style.css';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="largeText">Nava Sotto </span>
            from Isreal.
            <br />I am a junior Full Stack Developer developer.
            <br />
            <br />
            I have a lot of passion for the software field.
            I love the challenge of solving problems, being able to pay attention to the little details and creating end-to-end products.
            <br /><br /> Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Read a book

            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoy with my nephews

            </li>
          </ul>
          <p className="largeTitle" style={{ marginBlockEnd: 0, color: "#a56889" }}>
            "The only place success comes before work is in the dictionary"
          </p>
          <footer className="blockquote-footer">Vince Lombardi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
