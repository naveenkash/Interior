import React, { Component } from 'react'
import '../style/testimonial.css'
export class testimonial extends Component {


    constructor(props){
        super(props)
        this.t=0
    }
    move = () => {
        return {
            transform: `translatex(${this.t}px)`,
            transition: 'all 0.3s cubic-bezier(0, 0, 0.34, 0.85) 0s'
        }
    }
    left = () => {
        if (this.t < -2640) {
            return;
        }
        this.t += -660;
        this.setState({ left: this.t, })

    }
    right = () => {
        if (this.t === 0) {
            return;
        }
        this.t += 660;
        this.setState({ left: this.t })
    }

    render() {
        const testimonial = [
            {
                tweetname: 'Britney havana',
                link:'@Light’s craft',
                tweetrole: 'Co-Founder & CEO',
                tweetinfo: 'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
            },
            {
                tweetname: 'Britney havana',
                link:'@Light’s craft',
                tweetrole: 'Co-Founder & CEO',
                tweetinfo: 'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
            },
            {
                tweetname: 'Britney havana',
                link:'@Light’s craft',
                tweetrole: 'Co-Founder & CEO',
                tweetinfo: 'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
            },
            {
                tweetname: 'Britney havana',
                link:'@Light’s craft',
                tweetrole: 'Co-Founder & CEO',
                tweetinfo: 'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
            },
            {
                tweetname: 'Britney havana',
                tweetrole: 'Co-Founder & CEO',
                link:'@Light’s craft',
                tweetinfo: 'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
            },
            {
                tweetname: 'Britney havana',
                link:'@Light’s craft',
                tweetrole: 'Co-Founder & CEO',
                tweetinfo: 'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
            }
        ]
        return (
            <div className="testimonial">
                <div className="project-wrapper">
                    <div className="testimonial-head">
                        <h5>TESTIMONIAL</h5>
                        <h2>What Our Clients Say</h2>
                    </div>
                    <div className="testimonial-container">

                        <div className="testimonial-slider">
                            <div className="testimonial-slider-container">
                                <ul style={this.move()} className="testimonial-slide">
                                    {
                                        testimonial.map((test)=>(
                                    <li>
                                        <div className="userInfo">
                                            <div className="test-card">
                                                    <h3>{test.tweetname}</h3>
                                                    <p>{test.tweetrole} <a href="https://naveenkashyap.com">{test.link}</a> </p>
                                            </div>
                                            <p>{test.tweetinfo}</p>
                                        </div>
                                    </li>
                                        ))
                                    }
                                    
                                </ul>
                            </div>
                            <div className="slide-glider test-glide">
                            <div onClick={this.left} className="glide-prev"> <div className="glide-prev-left"><div className="glide-prev-top"></div> <div className="glide-prev-bottom"></div> </div></div>

                            <div onClick={this.right} className="glide-next">
                                <span></span>
                            </div>
                        </div>
                        </div>
                        <div className="testimonial-slider-img">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default testimonial
