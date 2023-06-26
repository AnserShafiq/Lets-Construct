import React from "react";
import './styles.css';
import WebLogo from '../../images/WebLogo2.png';
import { useNavigate } from "react-router-dom";

const Header1 = () => {
    const navigate = useNavigate();
    const currentPosition=window.location.pathname;
    const logoutCall = () =>{
        if(currentPosition.includes('/Customers'))
        {
            navigate('/Customers');
        }
        else if(currentPosition.includes('/Workers')){
            navigate('/Workers');
        }
        else if(currentPosition.includes('/ProductDealers')){
            navigate('/ProductDealers');
        }
    }

    return(
        <div className="headerBody">
        <div className="sectionOne">
            <img src={WebLogo} className="Header-Logo" alt='headerLogo'/>
            <h1 className="headerHeading">Let's Construct</h1>
        </div>
        <h3 className="logoutBtn" onClick={logoutCall} >LogOut</h3>
        </div>
    );
};

export default Header1;