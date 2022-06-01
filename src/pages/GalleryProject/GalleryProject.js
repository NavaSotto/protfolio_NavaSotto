//npm install react-image-video-lightbox
//npm i react-responsive-image-grid
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import ReactImageVideoLightbox from "react-image-video-lightbox";
import projectImges from '../../components/Media/Media';
import './style.css';
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import Particle from '../../components/Particle/Particle';


function GalleryProject() {
  const [currentGalleryData, setCurrentGalleryData] = useState([]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [startVisible, setStartVisible] = useState(false);
  const [endVisible, setEndVisible] = useState(true);
  useEffect(() => {
    filterDataByProject();
  }, []);
  useEffect(() => {
    console.log(currentImgIndex);
    // console.log(currentGalleryData.length);

    const prev = (currentImgIndex == 0) ? false : true;
    setStartVisible(prev);
    const next = (currentImgIndex == currentGalleryData.length - 1) ? false : true;
    setEndVisible(next);

  }, [currentImgIndex]);


  function filterDataByProject() {
    const projectObj = projectImges.filter((p) => p.name == currentProject);
    var data = projectObj[0].imgSrcArr;
    setCurrentGalleryData(data);
  }
  function getMediaType(url) {
    // console.log(url);
    const index = url.lastIndexOf('.');
    const extension = url.substring(index + 1);
    return (extension == "mp4" || extension == "webm") ? "video" : "image";
  }
  function getFileName(url) {
    const index = url.lastIndexOf('/');
    const name = url.substring(index + 1);
    return `${currentProject}/${name}`;

  }
  function prevSlide() {
    const temp = currentImgIndex - 1;
    if (temp >= 1 && temp <= currentGalleryData.length) {
      setCurrentImgIndex(temp);
    }
  }
  function nextSlide() {
    const temp = currentImgIndex + 1;
    if (temp >= 1 && temp <= currentGalleryData.length) {
      setCurrentImgIndex(temp);
    }
  }

  const location = useLocation();
  const currentProject = location.pathname.substring(10, location.pathname.length);

  var namesOfProjects = {

    'project1': {
      name: "Programming practice platform", description: `A platform for practicing code in different programming languages.
    The exercises contain explanations, solutions and allow you to reach the level of a master.
    End-to-end development, includes user management system where the Admin user can edit an exercise and  
    registered users can view solutions.`,
      "technologies": `VScode |HTML | CSS | JS | bootstrap| Node.js | React | MongoDB | JWT`
    },
    'project2': {
      name: "Store", description: `An online store where you can select a category and view all the products in the same category, filter products and get information about a particular item. `,
      "technologies": `VScode | HTML | CSS | JS | bootstrap| Node.js | React `
    },
    'project3': {
      name: "A trip around the world", description: `A site where you can travel the world and get information about any country you choose.
    You can also watch the current weather updated depending on your location.   
    `, "technologies": `VScode | HTML | CSS | JS | bootstrap| React `
    },

    'project4': {
      name: "Trivia Game", description: `A tool for creating custom trivia quizzes. A desktop version of the familiar ‘Kahoot’ game.    
    `, "technologies": `Visual Studio | C# | WPF`
    },

    'project5': {
      name: "ToDoList", description: `A web application platform that allows you to save your daily tasks so as not to miss anything.    
    `, "technologies": `VScode | HTML | CSS | JS | bootstrap| Node.js`
    },

    'project6': {
      name: "Simontoric-JustMove", description: `Implementation tool for strengthening the shoulder girdle and memory in response to sports injuries.     
    `, "technologies": `visual Studio | C# | WPF | SDK Microsoft Kinect camera`
    },

    'project7': {
      name: "Xonix Game", description: `Implementation of Xonix game. The objective of the game is to draw rectangles in the space that occupies the main section of the screen while you avoid the enemies, both in the margins and on the drawable section, which can kill you on contact.   
    `, "technologies": `visual Studio | C++ | SFML`
    },

    'project8': {
      name: "Pac-Man", description: `Implementation of a classic arcade game-Pac-Man. The game features pac-man navigation through a maze. Your goal is for Peck-Man to eat all the balls (white circles) while avoiding the ghosts that chase after him. If ever a ghost catches Pac-Man then Pac-Man is defeated.    
    `, "technologies": `visual Studio | C++ | SFML`
    },


  };



  return (
    <div className='galleryClass'>
      <Particle />

      <h1 className='projectTitle'>{namesOfProjects[currentProject].name}</h1>
      <p className='projectDescriptionText'>  {namesOfProjects[currentProject].description}    </p>
      <span className='title4'><b>Technologies : </b></span><span className='projectDescriptionText'>{namesOfProjects[currentProject].technologies} </span>



      <div className="slider " >
        <BiChevronLeft className={`prevNextIcon ${startVisible ? 'visibleClass' : 'hideClass'}`} onClick={prevSlide} />
        {
          getMediaType(`${currentGalleryData[currentImgIndex]}`) == 'image' ?
            <img className='sliderMedia' src={currentGalleryData[currentImgIndex]} alt={getFileName(`${currentGalleryData[currentImgIndex]}`)} /> :
            <video className='sliderMedia' src={currentGalleryData[currentImgIndex]} controls={true} autoPlay={false} loop={false} muted={true} alt={getFileName(`${currentGalleryData[currentImgIndex]}`)} >
              <source type="video/mp4" alt={getFileName(`${currentGalleryData[currentImgIndex]}`)} />
            </video>
        }
        <BiChevronRight className={`prevNextIcon ${endVisible ? 'visibleClass' : 'hideClass'}`} onClick={nextSlide} />
      </div>

      <div className='gridClass'>
        {currentGalleryData.map((elem, index) => (
          getMediaType(elem) == 'image' ?
            <img src={elem} className={`gridImgVideo ${index == currentImgIndex ? 'activeImg' : ''}`} key={index} onClick={() => setCurrentImgIndex(index)} alt={getFileName(elem)} /> :
            <video controls autoPlay={false} loop={false} muted={true} key={index} alt={getFileName(elem)} className={`gridImgVideo ${index == currentImgIndex ? 'activeImg' : ''}`} onClick={() => setCurrentImgIndex(index)} src={elem + "#t=4"}  >
              <source type="video/mp4" alt={getFileName(elem)} />
            </video>
        ))}
      </div>
    </div>



  );



}

export default GalleryProject;






