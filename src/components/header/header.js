import React from 'react';
import Navbar from './navbar.js'
import '../../style/header.css';
import Consult from "./freeconsult.js";
import Slider from "./slider.js";
import User from './user.js';
import Search from './search.js';
import Burger from '../navbar_menu.js';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userClicked: false,
            SearchClicked:false,
            burgerClicked:false,
        }
    } 
    UserF = (IsUserClicked) => {
            this.setState({ userClicked: IsUserClicked })
    }
    burgerF = (IsBurgerClicked) => {
        this.setState({ burgerClicked: IsBurgerClicked })
}
    searchF=(IsSearchClicked)=>{
        this.setState({ SearchClicked: IsSearchClicked })
    }
    //hiding component 
    close=(open)=>{
        this.setState({userClicked:open})
    }
    closeSearch=(open)=>{
        this.setState({SearchClicked:open})
    }

    navClose=(open)=>{
        this.setState({burgerClicked:open})
    }
    render() {
       
        
        return (
           
            <div className="header">
                <Navbar searchClicked={this.searchF} userClicked={this.UserF} burgerClicked={this.burgerF}/> {/*getting instruction through navbar clicks here to set the state to true so we can show the component*/ }
                {(() => {
                    if (!this.state.userClicked) {
                        return null;
                    }
                    return(
                    <User open={this.close}/> //getting instruction through user close clicks here to set the state to false so we can hide the component through props
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
                {(() => {
                    if (!this.state.burgerClicked) {
                        return null;
                    }
                    return(
                    <Burger close={this.navClose}/>
                    )
                })()}
                <div className="header-content">
                    <div className="header-wrapper"> 
                        <Consult />
                        <Slider />
                    </div>
                </div>
            </div>
        );
    }

}