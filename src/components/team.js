import React, { Component } from 'react'
import '../style/team.css';
import member1 from '../assets/member1.jpg'
import member2 from '../assets/member2.jpg'
import member3 from '../assets/member3.jpg'
export class team extends Component {
    render() {
        return (
            <div className="team">
                <div className="team-wrapper">
                    <div className="team-container">
                        <div className="team-head">
                            <h5>OUR TEAM MEMBER</h5>
                            <h2>Meet Our Perfectionist</h2>
                        </div>
                        <div className="team-slider-container">


                            <ul className="team-slider">
                                <li className="team-slide">
                                    <div className="team-img">
                                        <img src={member1} alt="" />
                                        <div className="team-info">
                                            <h3>John Doe</h3>
                                            <p>Project Manager</p>
                                        </div>
                                    </div>
                                    <div className="team-social">

                                    </div>
                                </li>
                                <li className="team-slide">
                                    <div className="team-img">
                                        <img src={member2} alt="" />
                                        <div className="team-info">
                                            <h3>John Doe</h3>
                                            <p>Project Manager</p>
                                        </div>
                                    </div>
                                    <div className="team-social">

                                    </div>
                                </li>
                                <li className="team-slide">
                                    <div className="team-img">
                                        <img src={member3} alt="" />
                                        <div className="team-info">
                                            <h3>John Doe</h3>
                                            <p>Project Manager</p>
                                        </div>
                                    </div>
                                    <div className="team-social">

                                    </div>
                                </li>
                                <li className="team-slide">
                                    <div className="team-img">
                                        <img src={member1} alt="" />
                                        <div className="team-info">
                                            <h3>John Doe</h3>
                                            <p>Project Manager</p>
                                        </div>
                                    </div>
                                    <div className="team-social">

                                    </div>
                                </li>
                                <li className="team-slide">
                                    <div className="team-img">
                                        <img src={member2} alt="" />
                                        <div className="team-info">
                                            <h3>John Doe</h3>
                                            <p>Project Manager</p>
                                        </div>
                                    </div>
                                    <div className="team-social">

                                    </div>
                                </li>
                                <li className="team-slide">
                                    <div className="team-img">
                                        <img src={member3} alt="" />
                                        <div className="team-info">
                                            <h3>John Doe</h3>
                                            <p>Project Manager</p>
                                        </div>
                                    </div>
                                    <div className="team-social">

                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="slide-glider team-glide">
                            <div onClick={this.back} className="glide-prev"> <div className="glide-prev-left"><div className="glide-prev-top"></div> <div className="glide-prev-bottom"></div> </div></div>

                            <div onClick={this.next} className="glide-next">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default team 
