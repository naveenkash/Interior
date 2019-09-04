import React, { Component } from 'react'
import '../style/news.css'
export class news extends Component {
    componentDidMount() {
        window.addEventListener('scroll', () => {

            var container = document.querySelector(".news");
            var head = document.querySelector(".news-i1");
            var head2 = document.querySelector(".news-i2");
            var head3 = document.querySelector(".news-i3");
            var head4 = document.querySelector(".news-i4");
            var containerOffsetTop = container.offsetTop;
            var clientHeight = container.clientHeight;
            var halfClientHeight = clientHeight / 1.5;
            var res = containerOffsetTop - halfClientHeight;
            if (window.pageYOffset >= res) {
                head.classList.add("animated", "fadeInUp", "show");
                head2.classList.add("animated", "fadeInUp", "show");
                head3.classList.add("animated", "fadeInUp", "show");
                head4.classList.add("animated", "fadeInUp", "show");
                head.classList.remove('hide');
                head2.classList.remove('hide');
                head3.classList.remove('hide');
                head4.classList.remove('hide');
            }
        })
    }
    render() {
        const news = [
            {
                newsHead: 'Corporate design is a crucial part of your brand.'
                , id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                class: 'news-info hide news-i1',
                newsInfo: 'Corporate design is a crucial part of your brand. Our approach corporate design is extraordinary. Please come and visit us', newsLink: 'https://naveenkashyap.com'
            },

            {
                newsHead: 'Learn more about landscape plans, how to design them.', id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                class: 'news-info hide news-i2',
                newsInfo: 'Learn more about landscape plans, how to design them, what to watch out for in your layout. We deign the appropriate layout for our clients to deliver best', newsLink: 'https://naveenkashyap.com'
            },

            {
                newsHead: 'Discover our design ideas, beautiful photos for interior design.', id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                class: 'news-info hide news-i3',
                newsInfo: 'Discover our design ideas, beautiful photos and how-to projects to create Interior Design. We try to reflect your personality on our design', newsLink: 'https://naveenkashyap.com'
            },

            {
                newsHead: 'Interior design is an art and we are trying to paint monalisa.', id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                class: 'news-info hide news-i4',
                newsInfo: 'With the best players in the designing sector, we explore a whole new world of interior design.Our approach corporate design is extraordinary',
                newsLink: 'https://naveenkashyap.com'
            }
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
                            news.map((news) => (
                                <div key={news.id} className={news.class}>
                                    <h3>{news.newsHead}</h3>
                                    <p>{news.newsInfo}</p>
                                    <a href="https://naveenkashyap.com"> <span className="newsarr"></span> <span className="text">READ</span></a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default news
