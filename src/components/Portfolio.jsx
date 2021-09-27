import React, { Component } from 'react';
import MoreButton from './MoreButton';
import '../css/fontawesome/all.css';
import '../css/Portfolio.css';
import 'animate.css'
import IntroProfile from './IntroProfile';
import Navbar from './Navbar';
import Content from './Content';

class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state = {
            hideProfile: false,
            hideNavbar: true,
            navbarAnimations: "opacity-0",
            contentAnimations: "opacity-0",
            navActiveItem: "About",
            navItemClicked: false,
        }
    }

    handleMoreButtonClick() {
        if(this.state.hideNavbar){
            this.setState({
                contentAnimations: "animate__animated animate__fadeIn animate__slower",
                hideNavbar: false, 
                hideProfile: true,
            });
        }
        else{
            this.setState({
                contentAnimations: "animate__animated animate__fadeOut animate__faster",
                hideNavbar: true, 
                hideProfile: false,
            });
        }
        
    }

    handleNavItemClick(item){
        if(item === "About"){
            this.setState({
                navItemClicked: true,
                navActiveItem: "About",
            });
        }
        else if(item === "Technologies"){
            this.setState({
                navItemClicked: true,
                navActiveItem: "Technologies",
            })
        }
        else if(item === "Experience"){
            this.setState({
                navItemClicked: true,
                navActiveItem: "Experience",
            })
        }
        else if(item === "Projects"){
            this.setState({
                navItemClicked: true,
                navActiveItem: "Projects",
            })
        }
        else if(item === "Extra"){
            this.setState({
                navItemClicked: true,
                navActiveItem: "Extra",
            })
        }
        
    }

    handleNavbarTransitionEnd(){
        this.setState({navbarAnimations: this.state.hideNavbar ? "animate__fadeOut" : "animate__fadeIn"});
    }

    render() { 
        return (
            <React.Fragment>
                <div 
                id="myModal" 
                className={`modal text-center ${this.state.hideProfile ? "slide-up" : "slide-down"}`}
                onTransitionEnd={() => this.handleNavbarTransitionEnd()}
                >
                    <div className="modal-content">
                        <div style={{backgroundColor: 'black'}}
                            >
                            <IntroProfile></IntroProfile>
                            <MoreButton
                            handleClick={() => this.handleMoreButtonClick()}
                            hideProfile={this.state.hideProfile}></MoreButton>

                            <div id="navbar" className={`mt-4 animate__animated ${this.state.navbarAnimations}`}>
                            <Navbar
                            activeItem={this.state.navActiveItem}
                            handleClick={(item) => this.handleNavItemClick(item)}></Navbar>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`container ${this.state.contentAnimations}`
                }>
                    <Content navActiveItem={this.state.navActiveItem}></Content>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Portfolio;