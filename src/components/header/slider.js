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
        this.slider = React.createRef();
        this.state = {
            animatedScroll:false,
            left: 0,
            percent: true,
            rightpercent: false,
            slides: [{
                    src: slide1,
                    name: "Rest Room",
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                },
                {
                    src: slide2,
                    name: "Living Room",
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                },
                {
                    src: slide3,
                    name: "Corner",
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                },
                {
                    src: slide1,
                    name: "Rest Room",
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                },
                {
                    src: slide2,
                    name: "Living Room",
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                },
                {
                    src: slide3,
                    name: "Corner",
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
    // onMouseDown = (e) => {
    //     e.persist();
    //     this.isDown = true;
    //     console.log(e);
    //     this.startX = e.pageX - this.slider.current.offsetLeft;
    //     this.scrollLeft = this.slider.current.scrollLeft;
    //     this.slider.current.style.cursor = 'grabbing';
    //     console.log('mouse down ', e.pageX - this.slider.current.offsetLeft, this.slider.current.scrollLeft);
    // }
    // onMouseLeave = () => {
    //     this.isDown = false;
    // }
    // onMouseUp = () => {
    //     this.isDown = false;
    //     this.slider.current.style.cursor = 'pointer';
    // }

    // onMouseMove = (e) => {
    //     if (!this.isDown) {
    //         return;
    //     }
    //     e.preventDefault();
    //     var x = e.pageX - this.slider.current.offsetLeft;
    //     var walk = x - this.startX;
    //     this.startX = x;
    //     var z = walk;
    //     var finalValue = this.state.left + z;
    //     finalValue = Math.floor(finalValue * 100) / 100;
    //     this.setState({
    //         left: finalValue
    //     }, () => {});
    //     this.setState({
    //         percent: false
    //     })
    // }
   
    goLeft = () => {
        var slide_width = this.slide.current.clientWidth;
        var copyArrayPop = [...this.state.slides];
        copyArrayPop.pop();
        var finalArrayPop = [this.state.slides[5], ...copyArrayPop]
        this.setState(
          {
            slides: finalArrayPop,
            left: -this.state.width,
            animatedScroll:false
          },
          () => {
              setTimeout(() => {
                     var newAnimatedScroll = slide_width
                     console.log(newAnimatedScroll);
                     
              this.setState({ 
                  left: 0,
                  animatedScroll:true 
                });
              }, 200);
          }
        );

    }
    goRight = () => {
            var slide_width = this.slide.current.clientWidth;
            var copyArrayShift = [...this.state.slides];
            copyArrayShift.shift();
            var finalArrayShift = [...copyArrayShift, this.state.slides[0]]
            this.setState(
              {
                slides: finalArrayShift,
                left: 0,
                animatedScroll:false
              },
              () => {
                  setTimeout(() => {
                         var newAnimatedScroll = slide_width
                         console.log(newAnimatedScroll);
                         
                  this.setState({ 
                      left: -this.state.width,
                      animatedScroll:true 
                    });
                  }, 200);
              }
            );
        }

        // mouseMove = () => {
        //     if (this.state.left > 0) {
        //         this.setState({
        //             left: 0
        //         });
        //         return
        //     } else if (this.state.left < -981) {
        //         this.setState({
        //             left: -981
        //         });
        //         return
        //     }
        //     return {
        //         transform: `translatex(${this.state.left}px)`
        //     }
        // }
        goLeftPixel = () => {
            if (this.state.animatedScroll) {
                return {
                transition: 'all 0.3s',
                transform: `translatex(${this.state.left}px)`,
            }
            }else{
                return {
                    transition: 'none',
                    transform: `translatex(${this.state.left}px)`,
                }
            }
        }
        setLi=()=>{
return{
    width:this.state.width
}
        }
        componentDidMount(){
            window.addEventListener("resize", () => {
                console.log("window resize");
          
            var slideeWidth = this.slider.current.clientWidth;
            if (window.innerWidth < 480) {
              slideeWidth = this.slider.current.clientWidth / 1;
              // return
            } else if (window.innerWidth < 1200) {
              slideeWidth = this.slider.current.clientWidth / 2;
              console.log(slideeWidth);
              // return
            } else {
              slideeWidth = this.slider.current.clientWidth / 3;
            }
            console.log({ width: this.state.width });
            this.setState({ width: slideeWidth ,left:-(slideeWidth)});
            if (window.innerWidth<1200) {
                this.marginPlusWidth = this.state.width + 15*2;
            }
            if (window.innerWidth>1200) {
                
            this.marginPlusWidth = this.state.width + 25*2;
            }
          });
      
          var slideeWidth = this.slider.current.clientWidth;
          if (window.innerWidth < 480) {
            slideeWidth = this.slider.current.clientWidth / 1;
            // return
          } else if (window.innerWidth < 1200) {
            slideeWidth = this.slider.current.clientWidth / 2;
            console.log(slideeWidth);
          } else {
            slideeWidth = this.slider.current.clientWidth / 3;
          } 
          this.setState({ width: slideeWidth }, () => {
            this.setState({ left: -(this.state.width) });
            console.log(this.state.scroll);
            
            console.log({ width: this.state.width });
            this.setLi();
          });
        }


        render() {


            return ( <div className = "slider" >
                <div ref={this.slider} className = "slider-wrapper" >
                <div 
                // onMouseDown = {
                //     this.onMouseDown
                // }
                style = {
                    this.state.percent ? this.goLeftPixel() : this.mouseMove()
                }
                // onMouseUp = {
                //     this.onMouseUp
                // }
                // onMouseLeave = {
                //     this.onMouseLeave
                // }
                // onMouseMove = {
                //     this.onMouseMove
                // }
                ref = {
                    this.slideContainer
                }
                className = "slider-container" > {
                    this.state.slides.map(slide => ( <div ref = {
                            this.slide
                        }
                        key = {
                            slide.id
                        }
                        className = "slide" style={this.setLi()}>
                        <img src = {
                            slide.src
                        }
                        alt = "" />
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