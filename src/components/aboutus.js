import React, { Component } from 'react'
import about from '../assets/about.png'
import  "../style/about.css";
export class aboutus extends Component {
    render() {
        return (
            <div className="aboutus">
                    <div className="aboutus-wrapper">
                            <div className="about-img">
                                 <img src={about} alt=""/>
                            </div>
                            <div className="about-content">
                                        <div className="about-head">
                                            <h2>  Hi, Meet <br/>Concrete Squarefeet </h2>
                                        </div>
                                        <div className="about-info">
                                            <p>Your interior should still represent your style and feel like a place you want to unwind in. No matter how large your space is or what your design preference is, these designer examples are designed to inspire you. No matter what your choices are, customer satisfaction is our desired goal.</p>
                                            <p>When considering the design of your bedroom, it’s important to keep in mind both aesthetics and functionality. If storage is a primary concern, it is important to integrate the right cupboards and wardrobes into your design.</p>
                                        </div>
                                        <div className="about-visit">
                                            <a href="https://naveenkashyap.com"> <span className="btn-txt">VISIT SITE</span> <span className="next_arrow"></span></a>
                                        </div>
                                        
                            </div>
                    </div>
            </div>
        )
    }
}

export default aboutus
