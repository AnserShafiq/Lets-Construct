import React from "react";
import './styles.css';
import WebLogo from '../../images/WebLogo2.png';
const Header = () => {

    return(
        <div className="headerBody">
            <img src={WebLogo} className="Header-Logo" alt='headerLogo'/>
            <h1 className="headerHeading">Let's Construct</h1>
        </div>
    );
};

export default Header;