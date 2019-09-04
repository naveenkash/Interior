import React, { Component } from 'react'
import '../style/navbar_menu.css'
export class navbar extends Component {
    constructor(props) {
        super(props)
        this.state={
            open:true,
        }
    }

    goToFeature = (e) => {
        e.preventDefault();
        this.removeNavActive()
        var feature = document.querySelector('.feature');
        window.scrollTo(0, feature.offsetTop - 80)
        this.addNavActive(0);
    }
    goToAbout = (e) => {
        e.preventDefault();
        this.removeNavActive()
        var feature = document.querySelector('.aboutus');
        window.scrollTo(0, feature.offsetTop - 80)
        this.addNavActive(1);
    }
    goToProject = (e) => {
        e.preventDefault();
        this.removeNavActive()
        var feature = document.querySelector('.project');
        window.scrollTo(0, feature.offsetTop - 90)
        this.addNavActive(2);
    }
    goToTeam = (e) => {
        e.preventDefault();
        this.removeNavActive()
        var feature = document.querySelector('.team');
        window.scrollTo(0, feature.offsetTop - 80)
        this.addNavActive(3);
    }
    goToNews = (e) => {
        e.preventDefault();
        this.removeNavActive()
        this.removeNavActive()
        var feature = document.querySelector('.news');
        window.scrollTo(0, feature.offsetTop - 80)
        this.addNavActive(4);
    }
    goToTestimonial = (e) => {
        e.preventDefault();
        this.removeNavActive()
        var feature = document.querySelector('.testimonial');
        window.scrollTo(0, feature.offsetTop + 20)
        this.addNavActive(5);
    }
    addNavActive = (num) => {
        var lis = document.querySelectorAll('.navbar_menu_wrapper ul li');
        lis[num].classList.add('nav_active');
    }

    removeNavActive = () => {
        var lis = document.querySelectorAll('.navbar_menu_wrapper ul li');
        for (let i = 0; i < lis.length; i++) {
            const li = lis[i];
            if (li.classList.contains('nav_active')) {
                li.classList.remove('nav_active')
            }
        }
        console.log(lis);

    }
    closeNav=(e)=>{
            e.preventDefault();
            this.props.close(!this.state.open)
        
    }
    render() {
        return (
            <div className="navbar_menu_container">
            <div className="animated navbar_menu fadeInRight">
                <div className="navbar_menu_wrapper">
                    <ul>
                        <li onClick={this.goToFeature}>Feature</li>
                        <li onClick={this.goToAbout}>About</li>
                        <li onClick={this.goToProject}>Project</li>
                        <li onClick={this.goToTeam}>Team</li>
                        <li onClick={this.goToNews}>News</li>
                        <li onClick={this.goToTestimonial}>Testimonial</li>
                    </ul>
                <div className="search-close nav-close" onClick={this.closeNav}>
                    <div className="searchcross1"></div>
                    <div className="searchcross2"></div>
                    </div>
                </div>
               
            </div>
            </div>
        )
    }
}

export default navbar
