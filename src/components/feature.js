import React, { Component } from 'react'
import '../style/feature.css'
import design from '../assets/c-design.svg';
import island from '../assets/island.svg';
import bed from '../assets/bed.svg';
export class feature extends Component {
    constructor(props){
        super(props)
        this.feat = React.createRef();
    }
    componentDidMount() {
        window.addEventListener('scroll',()=>{

            var container = document.querySelector(".feature");
            var head= document.querySelector(".feature-head");
            var containerOffsetTop = container.offsetTop;
            var clientHeight = container.clientHeight;
            var halfClientHeight = clientHeight / 1.5;
            var res = containerOffsetTop - halfClientHeight;
            if (window.pageYOffset >= res) {
              head.classList.add("animated", "fadeInUp","show-head");
              head.classList.remove('hide-head');
            }
        })
    }
    render() {
        return (
            <div ref={this.feat} className="feature">
                <div className="feature-wrapper">
                    <div className="feature-head hide-head">
                        <h5>OUR SERVICES</h5>
                        <h2>Featured Service that We Provide</h2>
                    </div>
                    <div className="feature-content">
                        <div className="feature-info">
                            <img src={design} alt="" />
                            <h4>Corporate Design</h4>
                            <p>Corporate design is a crucial part of your brand. Our approach corporate design is extraordinary.</p>
                        </div>
                        <div className="feature-info">
                            <img src={island} alt="" />
                            <h4>Landscape Design</h4>
                            <p>Learn more about landscape plans, how to design them, what to watch out for in your layout.</p></div>
                        <div className="feature-info">
                            <img src={bed} alt="" />
                            <h4>Interior Design</h4>
                            <p>Discover our design ideas, beautiful photos and how-to projects to create Interior Design.</p></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default feature
