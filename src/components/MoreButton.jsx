import React, { useState } from 'react';

function MoreButton(props){
    
    const [animation, setAnimation] = useState("fadeIn");

    return (
    <React.Fragment>
        <div 
        className={`animate__animated animate__${animation} pt-4 mt-4`} 
        onAnimationEnd={() => setAnimation(animation === "fadeIn" ? "fadeOut" : "fadeIn")}
        onClick={props.handleClick}>
            <i className={`fas fa-chevron-${props.hideProfile ? "down" : "up"} display-6`} ></i>
        </div>
    </React.Fragment>
    );
}
 
export default MoreButton;