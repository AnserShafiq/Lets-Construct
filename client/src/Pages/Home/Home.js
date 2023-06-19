import React from 'react';
import {Container} from '@material-ui/core';
import WebLogo2 from '../../images/WebLogo2.png';
import worker from '../../images/Worker.png';
import customer from '../../images/Customer.png';
import dealer from '../../images/Dealer.png';
import useStyles from './StylesForHome.js';
import { useDispatch } from 'react-redux'; //A hook
import { useEffect } from 'react';
import Footer from '../../components/Header/footer';
import '../Styles.css';

const Home = () =>{
    const Classes = useStyles();

    const dispatch = useDispatch();
    const handleCustomersClick = () => {
        window.open('/Customers');
    };
    const handleWorkersClick = () => {
        window.open('/Workers');
    };

    const handleProductDealersClick=()=>{
        window.open('/ProductDealers');
    }
    useEffect(()=>{
        document.body.style.backgroundColor = '#7BA1D4';
    },[dispatch]);

    return(
        <>
            <div className={Classes.A}>
                <Container maxidth = "lg">
                    {/* Welcome Tag */}
                    <h1 className={Classes.welcomeSection}>WELCOME TO,</h1>
                    {/* LOGO */}
                    <img className={Classes.image} src={WebLogo2} alt="webLogo"/>
                    {/* Buttons Area */}
                    <div className={Classes.buttonArea}>
                        <h3 className={Classes.extraLine} >Are You A...</h3>
                    </div>
                    <div className={Classes.buttonsContainer}>
                        <div className={Classes.BoxButton} onClick={handleCustomersClick}>
                            <img onHover className={`hoverPointer ${Classes.btns}`} src={customer} alt="customerBtn"/>
                        </div>
                    
                        <div className={Classes.BoxButton} onClick={handleWorkersClick}>
                            <img className={`hoverPointer ${Classes.btns}`} src={worker} alt="workerBtn" />
                        </div>
                        <div className={Classes.BoxButton} onClick={handleProductDealersClick}>
                            <img className={`hoverPointer ${Classes.btns}`} src={dealer} alt="dealerBtn"/>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer/>
        </>
        
    );
}

export default Home;