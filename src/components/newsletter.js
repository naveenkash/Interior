import React, { Component } from 'react'
import '../style/newsletter.css'
export class newsletter extends Component {
    componentDidMount() {
        window.addEventListener('scroll',()=>{

            var container = document.querySelector(".newsletter");
            var head= document.querySelector(".newsletter-wrapper");
            var containerOffsetTop = container.offsetTop;
            var clientHeight = container.clientHeight;
            var halfClientHeight = clientHeight / 1.5;
            var res = containerOffsetTop - halfClientHeight;
            if (window.pageYOffset >= res) {
              head.classList.add("animated", "fadeInUp","show");
              head.classList.remove('hide');
            }
        })
    }
    render() {
        return (
            <div className="newsletter">
                <div className="newsletter-wrapper hide">
                    <div className="newsletter-head">
                        <h5>SUBSCRIBE NEWSLETTER</h5>
                        <h2>Don’t Miss Out Any Offer</h2>
                    </div>
                    <div className="newsletter-form">
                        <div className="newsletter-input">
                            <input type="text" placeholder="Enter email adrress" />
                            <span><i>
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>

                                </svg> </i></span>
                        </div>
                        <div className="newsletter-button">
                            <button><span>JOIN US</span></button>
                        </div>
                    </div>
                    <p>Note: Please call us at 12pm to 8am. otherwise our customer supporter will not available to reach your call, but you can drop mail anytime.</p>

                </div>
                <div className="newsletter-curve">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 222.29"><g><g><path d="M0,222.29S547.82,11.93,1248.06.64C1867.75-9.36,1920,101.3,1920,101.3v121Z"></path></g></g></svg>
                </div>
            </div>

        )
    }
}

export default newsletter
