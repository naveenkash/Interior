import React from 'react'
import logo from '../../assets/logo.svg';
import '../../style/navbar.css';
export default class Navebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            IsScrolled: false,
            IsUserClicked: false,
            IsSearchClicked:false,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        if (window.pageYOffset >= 45) {
            this.setState({ IsScrolled: true });
            console.log('scrolling more than 45');
        }
        else {
            this.setState({ IsScrolled: false })
        }
    }
    scrolling = () => {
        // console.log(this.state.IsScrolled);
        if (this.state.IsScrolled) {

            return {
                background: 'white',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 20px'
            }
        }
    }
    scrolled = () => {
        if (this.state.IsScrolled) {
            return {
                padding: '14px 0'
            }
        }
    }
    BugScrolled = () => {
        if (
            this.state.IsScrolled) {
            return {
                background: '#171717'
            }
        } else {
            return {
                background: '#c3c3c3'
            }
        }
    }
    showUserForm = (e) => {
        e.preventDefault();
        setTimeout(() => {
            this.setState({ IsUserClicked: true })
            this.props.userClicked(this.state.IsUserClicked);
        }, 100)

    }
    showSearch=(e)=>{
        e.preventDefault();
        setTimeout(() => {
            this.setState({ IsSearchClicked: true })
            this.props.searchClicked(this.state.IsSearchClicked);
        }, 100)

    }
    render() {
        const { IsScrolled } = this.state;
        return (
            <div style={this.scrolling()} className="navbar">
                <div style={this.scrolled()} className="navbar-container">
                    <div className="navbar-wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="navbar-items">
                            <div className="nav-item">
                                <div onClick={this.showSearch} className="icon">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className={`${IsScrolled ? "svgclrblack" : "svgclr"}`} fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                                </div>
                                <div onClick={this.showUserForm} className="icon">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" className="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className={`${IsScrolled ? "svgclrblack" : "svgclr"}`} fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg> </div>
                                <div className="burger-wrapper">
                                    <div className="burger">
                                        <div style={this.BugScrolled()} className="burger-line1"></div>
                                        <div style={this.BugScrolled()} className="burger-line2"></div>
                                        <div style={this.BugScrolled()} className="burger-line3"></div>
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

// export default Navbar
