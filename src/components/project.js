import React, { Component } from "react";
import "../style/project.css";
import chair from "../assets/chair.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export class project extends Component {
  constructor(props) {
    super(props);
    this.slide = React.createRef();
    this.container = React.createRef();
    this.slider = React.createRef();
    this.state = {
      move: 0,
      width: NaN
    };
    this.moveDir = this.state.move;
  }

  render() {
    const project = [
      {
        p1:
          "Create a mind map to brainstorm your project to inspire new ideas. Use a simple piece of paper, poster, or whiteboard for your mind map and we write the destination of your project in the middle.We  Write down related topics, subtopics, and relevant concepts around the goal and branch from them to create and follow different tangents.",
        p2:
          "When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.",
        id:
          Math.random()
            .toString(36)
            .substring(2, 15) +
          Math.random()
            .toString(36)
            .substring(2, 15)
      },
      {
        p1:
          "Create a mind map to brainstorm your project to inspire new ideas. Use a simple piece of paper, poster, or whiteboard for your mind map and we write the destination of your project in the middle.We  Write down related topics, subtopics, and relevant concepts around the goal and branch from them to create and follow different tangents.",
        p2:
          "When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.",
        id:
          Math.random()
            .toString(36)
            .substring(2, 15) +
          Math.random()
            .toString(36)
            .substring(2, 15)
      },
      {
        p1:
          "Create a mind map to brainstorm your project to inspire new ideas. Use a simple piece of paper, poster, or whiteboard for your mind map and we write the destination of your project in the middle.We  Write down related topics, subtopics, and relevant concepts around the goal and branch from them to create and follow different tangents.",
        p2:
          "When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.",
        id:
          Math.random()
            .toString(36)
            .substring(2, 15) +
          Math.random()
            .toString(36)
            .substring(2, 15)
      },
      {
        p1:
          "Create a mind map to brainstorm your project to inspire new ideas. Use a simple piece of paper, poster, or whiteboard for your mind map and we write the destination of your project in the middle.We  Write down related topics, subtopics, and relevant concepts around the goal and branch from them to create and follow different tangents.",
        p2:
          "When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.",
        id:
          Math.random()
            .toString(36)
            .substring(2, 15) +
          Math.random()
            .toString(36)
            .substring(2, 15)
      },
      {
        p1:
          "Create a mind map to brainstorm your project to inspire new ideas. Use a simple piece of paper, poster, or whiteboard for your mind map and we write the destination of your project in the middle.We  Write down related topics, subtopics, and relevant concepts around the goal and branch from them to create and follow different tangents.",
        p2:
          "When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.",
        id:
          Math.random()
            .toString(36)
            .substring(2, 15) +
          Math.random()
            .toString(36)
            .substring(2, 15)
      }
    ];
    var settings = {
      infinite: true,
      speed: 500,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      mobileFirst: true,
    };
    return (
      <div className="project">
        <div className="project-wrapper">
          <div className="project-head hide">
            <h5>WORK PROCEDURE</h5>
            <h2>How We Do Our Projects</h2>
          </div>
          <div className="project-slide">
            <div ref={this.slider} className="project-slider">
              <Slider ref={c => (this.slider = c)} {...settings}>
                {project.map(project_Slide => (
                  <ul key={project_Slide.id} className="project-slider-container">
                    <li key={project_Slide.id}>
                      <div className="project-slider-content">
                        <p>{project_Slide.p1}</p>
                        <p>{project_Slide.p2}</p>
                      </div>
                    </li>
                  </ul>
                ))}
              </Slider>

              <div className="slide-glider">
                <div onClick={this.back} className="glide-prev">
                  <div className="glide-prev-left">
                    <div className="glide-prev-top"></div>
                    <div className="glide-prev-bottom"></div>
                  </div>
                </div>

                <div onClick={this.next} className="glide-next">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="project-img">
              <img src={chair} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default project;
