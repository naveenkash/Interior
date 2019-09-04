import React, { Component } from 'react'
import about from '../assets/about.png'
import  "../style/about.css";
export class aboutus extends Component {

    componentDidMount() {
        window.addEventListener('scroll',()=>{

            var container = document.querySelector(".aboutus");
            var head= document.querySelector(".about-img");
            var content= document.querySelector(".about-content");
            var h2= document.querySelector(".about-head h2");
            var info= document.querySelector(".about-info");
            var p1= document.querySelector(".p1");
            var p2= document.querySelector(".p2");
            var about_link= document.querySelector(".about-visit");
            var containerOffsetTop = container.offsetTop;
            var clientHeight = container.clientHeight;
            var halfClientHeight = clientHeight / 1.5;
            var res = containerOffsetTop - halfClientHeight;
            if (window.pageYOffset >= res) {
              head.classList.add("animated", "fadeInLeft","show");
              h2.classList.add("animated", "fadeInRight","show");
              p1.classList.add("animated", "fadeInRight","show");
              p2.classList.add("animated", "fadeInRight","show");
              about_link.classList.add("animated", "fadeInRight","show");
              content.classList.add("animated", "fadeInRight","show");
              content.classList.remove('hide');
              h2.classList.remove('hide');
              p1.classList.remove('hide');
              p2.classList.remove('hide');
              about_link.classList.remove('hide');
              head.classList.remove('hide');
              info.classList.remove('hide');
            }
        })
    }
    render() {
        return (
            <div className="aboutus">
                    <div className="aboutus-wrapper">
                            <div className="about-img hide">
                                 <img src={about} alt=""/>
                            </div>
                            <div className="about-content hide">
                                        <div className="about-head">
                                            <h2>  Hi, Meet <br/>Concrete Squarefeet </h2>
                                        </div>
                                        <div className="about-info hide">
                                            <p className="p1 hide">Your interior should still represent your style and feel like a place you want to unwind in. No matter how large your space is or what your design preference is, these designer examples are designed to inspire you. No matter what your choices are, customer satisfaction is our desired goal.</p>
                                            <p className="p2 hide">When considering the design of your bedroom, it’s important to keep in mind both aesthetics and functionality. If storage is a primary concern, it is important to integrate the right cupboards and wardrobes into your design.</p>
                                        </div>
                                        <div className="about-visit hide">
                                            <a  href="https://naveenkashyap.com"> <span className="btn-txt">VISIT SITE</span> <span className="next_arrow"></span></a>
                                        </div>
                                        
                            </div>
                    </div>
            </div>
        )
    }
}

export default aboutus
