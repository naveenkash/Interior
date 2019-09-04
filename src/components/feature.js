import React, { Component } from 'react'
import '../style/feature.css'
import design from '../assets/c-design.svg';
import island from '../assets/island.svg';
import bed from '../assets/bed.svg';
export class feature extends Component {
   
    componentDidMount() {
        window.addEventListener('scroll',()=>{

            var container = document.querySelector(".feature");
            var head= document.querySelector(".feature-head");
            var content= document.querySelector(".feature-content");
            var containerOffsetTop = container.offsetTop;
            var clientHeight = container.clientHeight;
            var halfClientHeight = clientHeight / 1.5;
            var res = containerOffsetTop - halfClientHeight;
            if (window.pageYOffset >= res) {
              head.classList.add("animated", "fadeInUp","show-head");
              head.classList.remove('hide-head');
              content.classList.add("animated", "fadeInUp","show-head");
              content.classList.remove('hide-head');
            }
        })
    }
    render() {
        return (
            <div className="feature">
                <div className="feature-wrapper">
                    <div className="feature-head hide-head">
                        <h5>OUR SERVICES</h5>
                        <h2>Featured Service that We Provide</h2>
                    </div>
                    <div className="feature-content hide-head">
                        <div className="feature-info">
                            <div className="feature-img">
                            <img src={design} alt="" /></div>
                            <div className="feature-detail">
                                
                            <h4>Corporate Design</h4>
                            <p>Corporate design is a crucial part of your brand. Our approach corporate design is extraordinary.</p>
                            </div>
                        </div>
                        <div className="feature-info">
                        <div className="feature-img">
                            <img src={island} alt="" /></div>
                            <div className="feature-detail">
                                
                            <h4>Corporate Design</h4>
                            <p>Corporate design is a crucial part of your brand. Our approach corporate design is extraordinary.</p>
                            </div>
                            </div>
                        <div className="feature-info">
                        <div className="feature-img">
                            <img src={bed} alt="" /></div>
                            <div className="feature-detail">
                                
                            <h4>Corporate Design</h4>
                            <p>Corporate design is a crucial part of your brand. Our approach corporate design is extraordinary.</p>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default feature
