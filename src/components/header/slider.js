import React, { Component } from "react";
import "../../style/slider.css";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/slider.css";
export class slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {
          src: slide1,
          name: "Corner",
          id:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        },
        {
          src: slide2,
          name: "Rest Room",
          id:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        },
        {
          src: slide3,
          name: "Living Room",
          id:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        },
        {
          src: slide1,
          name: "Corner",
          id:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        },
        {
          src: slide2,
          name: " Rest Room",
          id:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        },
        {
          src: slide3,
          name: "Living Room",
          id:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        }
      ]
    };
  }
  next = () => {
    this.slider.slickNext();
  };
  previous = () => {
    this.slider.slickPrev();
  };
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      dots:false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
      ]
    };
    return (
      <div className="slider">
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.state.slides.map(slide => (
            <div key={slide.id} className="slide">
              <img src={slide.src} alt="" />
              <div className="overlay">
                <h1> {slide.name} </h1>
              </div>
            </div>
          ))}
        </Slider>
        <div className="slider-arrows">
          <div className="arrow-wrapper " onClick={this.previous}>
            <div className="arrow-left">
              <div className="arrow-top"> </div>
              <div className="arrow-bottom"></div>
            </div>
          </div>
          <div
            className="arrow-wrapper arrow-wrapper-right"
            onClick={this.next}
          >
            <div className="arrow-right"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default slider;
