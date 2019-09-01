import React, { Component } from 'react'
import '../style/news.css'
export class news extends Component {
    render() {
        const news = [
            { newsHead: 'Corporate design is a crucial part of your brand.',
             newsInfo: 'Corporate design is a crucial part of your brand. Our approach corporate design is extraordinary. Please come and visit us',  newsLink:'https://naveenkashyap.com' },

            { newsHead: 'Learn more about landscape plans, how to design them.',
             newsInfo: 'Learn more about landscape plans, how to design them, what to watch out for in your layout. We deign the appropriate layout for our clients to deliver best',  newsLink:'https://naveenkashyap.com' },

            { newsHead: 'Discover our design ideas, beautiful photos for interior design.', 
            newsInfo: 'Discover our design ideas, beautiful photos and how-to projects to create Interior Design. We try to reflect your personality on our design',  newsLink:'https://naveenkashyap.com' },

            { newsHead: 'Interior design is an art and we are trying to paint monalisa.',
             newsInfo: 'With the best players in the designing sector, we explore a whole new world of interior design.Our approach corporate design is extraordinary',
            newsLink:'https://naveenkashyap.com' }
        ]
        return (
            <div className="news">
                <div className="news-wrapper">
                    <div className="news-head">
                        <div className="news-letter">N</div>
                        <div className="news-letter">E</div>
                        <div className="news-letter">W</div>
                        <div className="news-letter">S</div>
                    </div>
                    <div className="news-content">

                        {
                            news.map((news)=>(
                                <div className="news-info">
                                        <h3>{news.newsHead}</h3>
                                            <p>{news.newsInfo}</p>
                                        <a href="https://naveenkashyap.com"> <span className="newsarr"></span> <span className="text">READ</span></a>
                                </div>
                            ))
                        }
                        {/* <div className="news-info">
                            <h3>Corporate design is a crucial part of your brand.</h3>
                            <p>Corporate design is a crucial part of your brand. Our approach corporate design is extraordinary. Please come and visit us</p>
                            <a href="https://naveenkashyap.com"><span>READ</span></a>
                        </div>
                        <div className="news-info">
                            <h3>Corporate design is a crucial part of your brand.</h3>
                            <p>Corporate design is a crucial part of your brand. Our approach corporate design is extraordinary. Please come and visit us</p>
                            <a href="https://naveenkashyap.com"><span>READ</span></a>
                        </div>
                        <div className="news-info">
                            <h3>Corporate design is a crucial part of your brand.</h3>
                            <p>Corporate design is a crucial part of your brand. Our approach corporate design is extraordinary. Please come and visit us</p>
                            <a href="https://naveenkashyap.com"><span>READ</span></a>
                        </div>
                        <div className="news-info">
                            <h3>Corporate design is a crucial part of your brand.</h3>
                            <p>Corporate design is a crucial part of your brand. Our approach corporate design is extraordinary. Please come and visit us</p>
                            <a href="https://naveenkashyap.com"><span>READ</span></a>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default news
