import React, { Component } from 'react'
import '../../style/slider.css'
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';
export class slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            left: 0,
            percent: false,
            rightpercent:false
        }
        this.isDown = false;
        this.startX = 0;
        this.scrollLeft = 0;
        this.slider = React.createRef();
        this.p = 0;
    }
    onMouseDown = (e) => {
        e.persist();
        this.isDown = true;
        console.log(e);
        this.startX = e.pageX - this.slider.current.offsetLeft;
        this.scrollLeft = this.slider.current.scrollLeft;
        this.slider.current.style.cursor='grabbing';
        console.log(e.pageX - this.slider.current.offsetLeft, this.slider.current.scrollLeft);
    }
    onMouseLeave = () => {
        this.isDown = false;
    }
    onMouseUp = () => {
        this.isDown = false;
        this.slider.current.style.cursor='pointer';
    }
    onMouseMove = (e) => {
        if (!this.isDown) {
            return
        }
        e.preventDefault();
        var x = e.pageX - this.slider.current.offsetLeft;
        var walk = this.startX - x;
        var z = this.scrollLeft - walk;
        this.setState({ percent: false })
        this.setState({ left:  this.state.left + z/10 })
    }
    goLeftPercent = () => {
        return {
            transform: `translatex(${this.p}px)`,
            transition: '0.3s'
        }
    }
    goLeft = () => {
        if (this.p<-970) {
            return;
        }
        this.p += -326;
        this.setState({ left: this.p,percent: true  })
       
    }
    goRight=()=>{
        if (this.p===0) {
            return;
        }
        this.p += 326;
        this.setState({ left: this.p })
    }

    mouseMove = () => {
        if (this.state.left > 0) {
            this.setState({ left: 0 });
            return
        } else if (this.state.left < -980) {
            this.setState({ left: -980 });
            return
        }

        return {
            transform: `translatex(${this.state.left}px)`
        }
    }



    render() {
        return (
            <div className="slider">
                {/* <h1>{this.p}</h1>
                <h1>{this.state.left}</h1> */}
                <div className="slider-wrapper" >
                    <div onMouseDown={this.onMouseDown} style={this.state.percent ? this.goLeftPercent() : this.mouseMove()} onMouseUp={this.onMouseUp} onMouseLeave={this.onMouseLeave} onMouseMove={this.onMouseMove} ref={this.slider} className="slider-container">
                        <div className="slide">
                            <img src={slide1} alt="" />
                            <div className="overlay">
                                <h1>Livingroom1</h1>
                            </div>
                        </div>
                        <div className="slide">
                            <img src={slide2} alt="" />
                            <div className="overlay">
                                <h1>Livingroom2</h1>
                            </div>
                        </div>
                        <div className="slide">
                            <img src={slide3} alt="" />
                            <div className="overlay">
                                <h1>Livingroom3</h1>
                            </div>
                        </div>
                        <div className="slide">
                            <img src={slide1} alt="" />
                            <div className="overlay">
                                <h1>Livingroom4</h1>
                            </div>
                        </div>
                        <div className="slide">
                            <img src={slide2} alt="" />
                            <div className="overlay">
                                <h1>Livingroom5</h1>
                            </div>
                        </div>
                        <div className="slide">
                            <img src={slide3} alt="" />
                            <div className="overlay">
                                <h1>Livingroom6</h1>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="slider-arrows">
                    <div onClick={this.goLeft} className="arrow-wrapper"> <div className="arrow-left"><div className="arrow-top"></div> <div className="arrow-bottom"></div> </div></div>
                    <div onClick={this.goRight} className="arrow-right"></div>
                </div>
            </div>
        )
    }
}

export default slider
