import React, { Component } from 'react'
import '../style/testimonial.css'
import profileimg from '../assets/profile-img.jpg'
import profileimg5 from '../assets/profile-img5.jpg'
import profileimg2 from '../assets/profile-img2.jpg'
import profileimg3 from '../assets/profile-img3.jpg'
import profileimg4 from '../assets/profile-img4.jpeg'
export class testimonial extends Component {


    constructor(props) {
        super(props)
        this.rdId1 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.rdId2 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.rdId3 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.rdId4 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.rdId5 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        
        this.btnRef1 = React.createRef();
        this.btnRef2 = React.createRef();
        this.btnRef3 = React.createRef();
        this.btnRef4 = React.createRef();
        this.btnRef5 = React.createRef();
        
        this.slider = React.createRef();
        this.container = React.createRef();
        this.previousRef = undefined;
        this.state = {
            testimonial: [
                {
                    id: this.rdId1,
                    tweetname: 'Britney havana',
                    link: '@Light’s craft',
                    tweetrole: 'Co-Founder & CEO',
                    tweetinfo: 'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
                },
                {
                    id: this.rdId2,
                    tweetname: 'Britney havana',
                    link: '@Light’s craft',
                    tweetrole: 'Co-Founder & CEO',
                    tweetinfo: 'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
                },
                {
                    id: this.rdId3,
                    tweetname: 'Britney havana',
                    link: '@Light’s craft',
                    tweetrole: 'Co-Founder & CEO',
                    tweetinfo: 'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
                },
                {
                    id: this.rdId4,
                    tweetname: 'Britney havana',
                    tweetrole: 'Co-Founder & CEO',
                    link: '@Light’s craft',
                    tweetinfo: 'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
                },
                {
                    id: this.rdId5,
                    tweetname: 'Britney havana',
                    link: '@Light’s craft',
                    tweetrole: 'Co-Founder & CEO',
                    tweetinfo: 'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
                }
            ],
            profile: [
                { img: profileimg, class: 'btn1 btn-active', id: this.rdId1 ,btnRef : this.btnRef1 },
                { img: profileimg2, class: 'btn2', id: this.rdId2 ,btnRef : this.btnRef2},
                { img: profileimg3, class: 'btn3', id: this.rdId3 ,btnRef : this.btnRef3},
                { img: profileimg4, class: 'btn4', id: this.rdId4 ,btnRef : this.btnRef4},
                { img: profileimg5, class: 'btn5', id: this.rdId5 ,btnRef : this.btnRef5},
            ]
        }
        this.t = 0;
    }
   
    removeClass = (buttonArray)=>{
        for (let i = 0; i < buttonArray.length; i++) {
            const element = buttonArray[i];
            element.classList.remove('btn-active');
        }
    }
    left = () => {
        if (this.t === 0) {
            return;
        }
        this.t += this.state.width;
        this.setState({ left: this.t, })
        var buttonArray = document.querySelectorAll('button[data-btn-id]');
        if (this.t===0) {
            this.removeClass(buttonArray);
            buttonArray[0].classList.add('btn-active');
        }
        if (this.t=== -this.slider.current.clientWidth) {
            this.removeClass(buttonArray);
            buttonArray[1].classList.add('btn-active');
        }
        if (this.t=== -this.slider.current.clientWidth*2) {
            this.removeClass(buttonArray);
            buttonArray[2].classList.add('btn-active');
        }
        if (this.t=== -this.slider.current.clientWidth*3) {
            this.removeClass(buttonArray);
            buttonArray[3].classList.add('btn-active');
        }
        if (this.t=== -this.slider.current.clientWidth*4) {
            this.removeClass(buttonArray);
            buttonArray[4].classList.add('btn-active');
        }

    }
    right = () => {
        if (this.t <-(this.container.current.clientWidth-this.slider.current.clientWidth) ) {
            return;
        }else if(this.t >-(this.container.current.clientWidth-this.slider.current.clientWidth)){
            
        this.t += -this.state.width;
        this.setState({ left: this.t });
        }

        var buttonArray = document.querySelectorAll('button[data-btn-id]');
        if (this.t===0) {
            this.removeClass();
            buttonArray[0].classList.add('btn-active');
        }
        if (this.t=== -this.slider.current.clientWidth) {
            this.removeClass();
            buttonArray[1].classList.add('btn-active');
        }
        if (this.t=== -this.slider.current.clientWidth*2) {
            this.removeClass();
            buttonArray[2].classList.add('btn-active');
        }
        if (this.t=== -this.slider.current.clientWidth*3) {
            this.removeClass();
            buttonArray[3].classList.add('btn-active');
        }
        if (this.t=== -this.slider.current.clientWidth*4) {
            this.removeClass();
            buttonArray[4].classList.add('btn-active');
        }
    }
    removeClass=()=>{
      var buttonArray = document.querySelectorAll('button[data-btn-id]');
      for (let i = 0; i < buttonArray.length; i++) {
          const element = buttonArray[i];
          if (element.classList.contains('btn-active')) {
            element.classList.remove('btn-active')
          }
      }
    }
    scrollToElement = (profile) => {
        this.removeClass();
        let index = this.state.testimonial.findIndex(post => post.id === profile.id);
        this.t = -this.slider.current.clientWidth * index
        this.setState({ left: this.t })
        profile.btnRef.current.classList.add('btn-active')
    }
    
   
    li=()=>{
        return{
            width:this.state.width
        }
    }  
    move = () => {
        return {
            transform: `translatex(${this.t}px)`,
            transition: 'all 0.3s cubic-bezier(0, 0, 0.34, 0.85) 0s',
            width:this.state.width*5,
        }
    }
    componentDidMount() {
        window.addEventListener('resize',()=>{
            this.setState({width:this.slider.current.clientWidth})
          })
          this.setState({width:this.slider.current.clientWidth},()=>{
            this.li();
            this.move();
          })
    }
    

    render() {



        return (
            <div className="testimonial">
                <div className="testimonial-wrapper">
                    <div className="testimonial-head">
                        <h5>TESTIMONIAL</h5>
                        <h2>What Our Clients Say</h2>
                    </div>
                    <div className="testimonial-container">

                        <div className="testimonial-slider">
                            <div ref={this.slider} className="testimonial-slider-container">
                                <ul ref={this.container} style={this.move()} className="testimonial-slide">
                                    {
                                        this.state.testimonial.map((test) => (
                                            <li style={this.li()} data-li-id={test.id} key={test.id}>
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
                            {
                                this.state.profile.map((prof) => (
                                    <button ref={prof.btnRef} data-btn-id={prof.id} onClick={() => this.scrollToElement(prof)} key={prof.id} className={prof.class}><img src={prof.img} alt="" /></button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default testimonial
