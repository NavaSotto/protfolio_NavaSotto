import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiOutlineFolderView } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import location from "react";
import './style.css';



function ProjectCards(props) {


  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body  >
        <Card.Title className="title3  ">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>




      </Card.Body>
      <div className="projectBtn">
        <a
          href={props.link}
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"


        >
          <AiFillGithub size={30} />
        </a>

        <NavLink to={`/projects/${props.id}`}
          style={{ color: "white" }}
          rel="noopener noreferrer"

        >
          <AiOutlineFolderView size={30} />


        </NavLink>
      </div>

    </Card>
  );
}
export default ProjectCards;
