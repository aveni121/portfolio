import React from 'react'
import '../css/Navbar.css'

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() { 
        return (
            <React.Fragment>
                <div className="d-flex flex-column flex-sm-row justify-content-evenly navbar">
                    <div className={this.props.activeItem === "About" ? "nav-item nav-item-active" : "nav-item" } onClick={() => this.props.handleClick("About")}>About</div>
                    <div className={this.props.activeItem === "Technologies" ? "nav-item nav-item-active" : "nav-item" } onClick={() => this.props.handleClick("Technologies")}>Technologies</div>
                    <div className={this.props.activeItem === "Experience" ? "nav-item nav-item-active" : "nav-item" } onClick={() => this.props.handleClick("Experience")}>Experience</div>
                    <div className={this.props.activeItem === "Projects" ? "nav-item nav-item-active" : "nav-item" } onClick={() => this.props.handleClick("Projects")}>Projects</div>
                    <div className={this.props.activeItem === "Extra" ? "nav-item nav-item-active" : "nav-item" } onClick={() => this.props.handleClick("Extra")}>Extra</div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Navbar;