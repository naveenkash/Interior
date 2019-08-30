import React from 'react';
import Navbar from './navbar.js'
import '../../style/header.css';
import Consult from "./freeconsult.js";
import Slider from "./slider.js";
import User from './user.js';
function UserForm(props) {
    if (!props.open) {
        return null;
    }
    return(
    <User/>
    )
}
export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
        }
    } 
    UserF = (IsUserClicked) => {
        console.log('isusercliced '+IsUserClicked);
        
            this.setState({ clicked: IsUserClicked })
            
        console.log('cliked ' +this.state.clicked);
    }
    render() {
       
        
        return (
            <div className="header">
                <Navbar userClicked={this.UserF} />
                <UserForm open={this.state.clicked}/>
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