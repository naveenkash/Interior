import React, { Component } from 'react'
import '../style/project.css'
import chair from '../assets/chair.png';
export class project extends Component {
    constructor(props){
        super(props)
        this.state={
            move:0
        }
        this.moveDir=this.state.move
    }
    back=()=>{
        if (this.state.move<-2076) {
            return
        }
        this.setState({move:this.moveDir-=692});

    }
    next=()=>{
        if (this.state.move>-692) {
            return
        }
        this.setState({move:this.moveDir+=692});

    }
    moveslide=()=>{
        return{
            transform:`translatex(${this.state.move}px)`
        }
    }
    render() {
        return (
            <div className="project">
                <div className="project-wrapper">
                    <div className="project-head">
                        <h5>WORK PROCEDURE</h5>
                        <h2>How We Do Our Projects</h2>
                    </div>
                    <div className="project-slide">
                        <div className="project-slider">
                            <ul style={this.moveslide()} className="project-slider-container">
                                <li>
                                    <div className="project-slider-content">
                                        <p>Create a mind map to brainstorm your project to inspire new ideas. Use a simple piece of paper, poster, or whiteboard for your mind map and we write the destination of your project in the middle.We  Write down related topics, subtopics, and relevant concepts around the goal and branch from them to create and follow different tangents.</p>
                                        <p>When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.</p>
                                    </div>
                                </li>
                                
                                <li>
                                    <div className="project-slider-content">
                                        <p>Create a mind map to brainstorm your project to inspire new ideas. Use a simple piece of paper, poster, or whiteboard for your mind map and we write the destination of your project in the middle.We  Write down related topics, subtopics, and relevant concepts around the goal and branch from them to create and follow different tangents.</p>
                                        <p>When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="project-slider-content">
                                        <p>Create a mind map to brainstorm your project to inspire new ideas. Use a simple piece of paper, poster, or whiteboard for your mind map and we write the destination of your project in the middle.We  Write down related topics, subtopics, and relevant concepts around the goal and branch from them to create and follow different tangents.</p>
                                        <p>When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="project-slider-content">
                                        <p>Create a mind map to brainstorm your project to inspire new ideas. Use a simple piece of paper, poster, or whiteboard for your mind map and we write the destination of your project in the middle.We  Write down related topics, subtopics, and relevant concepts around the goal and branch from them to create and follow different tangents.</p>
                                        <p>When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="project-slider-content">
                                        <p>Create a mind map to brainstorm your project to inspire new ideas. Use a simple piece of paper, poster, or whiteboard for your mind map and we write the destination of your project in the middle.We  Write down related topics, subtopics, and relevant concepts around the goal and branch from them to create and follow different tangents.</p>
                                        <p>When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="slide-glider">
                        <div onClick={this.back} className="glide-prev"> <div className="glide-prev-left"><div className="glide-prev-top"></div> <div className="glide-prev-bottom"></div> </div></div>

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
        )
    }
}

export default project
