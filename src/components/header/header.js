import React from 'react';
import Navbar from './navbar.js'
import '../../style/header.css';
import Consult from "./freeconsult.js";
import Slider from "./slider.js";
import User from './user.js';
import Search from './search.js';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
            SearchClicked:false,
        }
    } 
    UserF = (IsUserClicked) => {
            this.setState({ clicked: IsUserClicked })
    }
    searchF=(IsSearchClicked)=>{
        this.setState({ SearchClicked: IsSearchClicked })
    }
    close=(open)=>{
        this.setState({clicked:open})
    }
    closeSearch=(open)=>{
        this.setState({SearchClicked:open})
    }
    render() {
       
        
        return (
           
            <div className="header">
                <Navbar searchClicked={this.searchF} userClicked={this.UserF} />
                {(() => {
                    if (!this.state.clicked) {
                        return null;
                    }
                    return(
                    <User open={this.close}/>
                    )
                })()}
                 {(() => {
                    if (!this.state.SearchClicked) {
                        return null;
                    }
                    return(
                    <Search close={this.closeSearch}/>
                    )
                })()}
                <div className="header-content">
                    <div className="header-wrapper"> 
                    <h1>{console.log(this.state.clicked)}</h1>
                        <Consult />
                        <Slider />
                    </div>
                </div>
            </div>
        );
    }

}