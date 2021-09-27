import React from 'react'
import profpic from '../images/profile-pic.jpeg';

function IntroProfile(props) {
    var imgStyle = {
        width: "200px",
        height: "200px"
    }

    return ( 
        <React.Fragment>
            <img src={profpic} alt="Ferdz Duterte" className="rounded-circle" style={imgStyle}></img>
            <div className="display-1">Ferdz Duterte</div>
            <div className="display-6">Fullstack Web Developer</div>
        </React.Fragment>
     );
}

export default IntroProfile;