import React, { Component } from 'react'
import '../../style/user.css';
import bg from '../../assets/login-bg.jpg'
import google from '../../assets/google.jpg'
export class user extends Component {
    constructor(props) {
        super(props)
        this.state = { loginClicked: true, regClicked: false }
    }
    login = () => {
        this.setState({ loginClicked: true, regClicked: false })
    }
    log = () => {
        if (!this.state.loginClicked) {
            return;
        }
        return {
            borderBottom: '2px solid #60B4F0',
            color: '#60B4F0'
        }
    }

    register = () => {
        this.setState({ regClicked: true, loginClicked: false })
    }
    reg = () => {
        if (!this.state.regClicked) {
            return;
        }
        return {
            borderBottom: '2px solid #60B4F0',
            color: '#60B4F0'
        }
    }
    loginActive = () => {
        if (this.state.regClicked) {
            return {
                transform: 'translatex(-50%)'
            }
        }else if(this.state.loginClicked){
            return {
                transform: 'translatex(0%)'
            }
        }

    }
    render() {
        return (
            <div className="user">
                <div className="user-wrapper">
                    <div className="user-container">
                        <div className="user-bg">
                            <img src={bg} alt="" />
                        </div>
                        <div className="user-form">
                            <div className="login-form">
                                <div className="login-btn">
                                    <div className="login">
                                        <button style={this.log()} onClick={this.login}>LOGIN</button>
                                    </div>
                                    <div className="register">
                                        <button style={this.reg()} onClick={this.register}>REGISTER</button>
                                    </div>
                                </div>
                                <div style={this.loginActive()} className="login-input">
                                    <div className="login-input-container">
                                        <h1>Welcome Folk</h1>
                                        <p>Welcome to Mate Family. Please login with your personal account information letter.</p>
                                        <div className="sign-in-google"><span><img src={google} alt="" /></span><p>  Sign In With Google</p></div>
                                        <div className="login-form-input">
                                            <div className="login-detail">
                                                <input type="email" name="" />
                                                <label>Email Address</label>
                                            </div>
                                            <div className="login-detail">
                                                <input type="password" name="" />
                                                <label >Password</label>
                                            </div>


                                        </div>
                                        <div className="remember"> <input type="checkbox" name="" id="rememberme" />
                                            <label htmlFor="rememberme"><span>Remember Me</span></label>
                                        </div>
                                        <div className="login-input-btn">
                                            <button>LOGIN</button>
                                            <a href="https://naveenkashyap.com">Forget Password</a>
                                        </div>
                                    </div>
                                    <div className="register-input-container">

                                    <h1>Welcome Folk</h1>
                                        <p>Welcome to Mate Family. Please login with your personal account information letter.</p>
                                        <div className="sign-in-google"><span><img src={google} alt="" /></span><p>  Sign In With Google</p></div>
                                        <div className="login-form-input">
                                        <div className="login-detail">
                                                <input type="text" name="" />
                                                <label>Full Name</label>
                                            </div>
                                            <div className="login-detail">
                                                <input type="email" name="" />
                                                <label>Email Address</label>
                                            </div>
                                            <div className="login-detail ldrp">
                                                <input type="password" name="" />
                                                <label >Password</label>
                                            </div>

                                        </div>
                                        
                                        <div className="login-input-btn">
                                            <button>REGISTER</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default user
