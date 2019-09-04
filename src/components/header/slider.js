import React, {
    Component
} from 'react'
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
            rightpercent: false,
            slides: [{
                    src: slide1,
                    name: "Livingroom1",
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                },
                {
                    src: slide2,
                    name: "Livingroom2",
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                },
                {
                    src: slide3,
                    name: "Livingroom3",
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                },
                {
                    src: slide1,
                    name: "Livingroom4",
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                },
                {
                    src: slide2,
                    name: "Livingroom2",
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                },
                {
                    src: slide3,
                    name: "Livingroom3",
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                }
            ]
        }
        this.isDown = false;
        this.startX = 0;
        this.scrollLeft = 0;
        this.slider = React.createRef();
        this.slide = React.createRef();
        this.p = 0;
        this.el = 0;
    }
    onMouseDown = (e) => {
        e.persist();
        this.isDown = true;
        console.log(e);
        this.startX = e.pageX - this.slider.current.offsetLeft;
        this.scrollLeft = this.slider.current.scrollLeft;
        this.slider.current.style.cursor = 'grabbing';
        console.log('mouse down ', e.pageX - this.slider.current.offsetLeft, this.slider.current.scrollLeft);
    }
    onMouseLeave = () => {
        this.isDown = false;
    }
    onMouseUp = () => {
        this.isDown = false;
        this.slider.current.style.cursor = 'pointer';
    }

    onMouseMove = (e) => {
        if (!this.isDown) {
            return;
        }
        e.preventDefault();
        var x = e.pageX - this.slider.current.offsetLeft;
        var walk = x - this.startX;
        this.startX = x;
        var z = walk;
        var finalValue = this.state.left + z;
        finalValue = Math.floor(finalValue * 100) / 100;
        this.setState({
            left: finalValue
        }, () => {});
        this.setState({
            percent: false
        })
    }
    goLeftPixel = () => {
        return {
            transform: `translatex(${this.p}px)`,
            transition: '0.3s'
        }
    }
    goLeft = () => {
        // var slider_width = this.slider.current.offsetWidth;
        var slide_width = this.slide.current.offsetWidth;
        if (this.p === 0 || this.p > 0) {
            var pop = [...this.state.slides];
            pop.pop();
            this.setState({
                slides: [this.state.slides[5], ...pop]

            });
            this.p = 0;
            this.setState({
                left: this.p,
                percent: true
            });
            return;

        }
        this.p += (slide_width + 20);
        this.setState({
            left: this.p,
            percent: true
        })

    }
    goRight = () => {
        var slider_width = this.slider.current.offsetWidth;
        var slide_width = this.slide.current.offsetWidth;
        if (this.p < -((slider_width / 2) - (slide_width + 20))) {


                var shift = [...this.state.slides];
                shift.shift();
                this.setState({
                    slides: [...shift, this.state.slides[0]]

                });
                this.p = -(((slide_width + 20)*6)-((slide_width + 20)*3));
                this.setState({
                    left: this.p,
                    percent: true
                });
                return;
            }
            // var slide_width = this.slide.current.offsetWidth;
             this.p += -(slide_width + 20); this.setState({
                left: this.p
            })
        }

        mouseMove = () => {
            if (this.state.left > 0) {
                this.setState({
                    left: 0
                });
                return
            } else if (this.state.left < -981) {
                this.setState({
                    left: -981
                });
                return
            }

            return {
                transform: `translatex(${this.state.left}px)`
            }
        }



        render() {


            return ( <div className = "slider" >
                <div className = "slider-wrapper" >
                <div onMouseDown = {
                    this.onMouseDown
                }
                style = {
                    this.state.percent ? this.goLeftPixel() : this.mouseMove()
                }
                onMouseUp = {
                    this.onMouseUp
                }
                onMouseLeave = {
                    this.onMouseLeave
                }
                onMouseMove = {
                    this.onMouseMove
                }
                ref = {
                    this.slider
                }
                className = "slider-container" > {
                    this.state.slides.map(slide => ( <div ref = {
                            this.slide
                        }
                        key = {
                            slide.id
                        }
                        className = "slide" >
                        <img src = {
                            slide.src
                        }
                        alt = "" / >
                        <div className = "overlay" >
                        <h1> {
                            slide.name
                        } </h1> </div> </div>
                    ))
                }

                </div> </div> < div className = "slider-arrows" >
                <div onClick = {
                    this.goLeft
                }
                className = "arrow-wrapper" > < div className = "arrow-left" > < div className = "arrow-top" > </div> <div className="arrow-bottom"></div > </div></div>
                <div onClick = {
                    this.goRight
                }
                className = "arrow-right" > </div> </div> </div>
            )
        }
    }

    export default slider