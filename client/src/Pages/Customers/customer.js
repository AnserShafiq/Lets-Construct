import React from 'react';
import {Container} from '@material-ui/core';
import Header2 from '../../components/Header/header2.js';
import Form from '../../components/newCustomerForm/form.js';
import useStyles from './StylesForCustomer.js';
import { useDispatch } from 'react-redux'; 
import { useEffect } from 'react';
import LoginForm from '../../components/loginForm/form.js';
import '../Styles.css';
import Footer from '../../components/Header/footer.js';


const Customers = () =>{
    const Classes = useStyles();

    const dispatch = useDispatch();

    useEffect(()=>{
        document.body.style.backgroundColor = '#7BA1D4';
    },[dispatch]);

    return(
        <>
            <Header2 />
            <div className={Classes.A}>
                <Container maxidth = "lg" className='customerHome'>
                    <h1 className={Classes.pageTag}>Customers...</h1>
                    <div className={Classes.forForms}>
                        <div className={Classes.forFormOne}>
                            <Form />
                        </div>
                        <div className={Classes.forFormTwo}>
                            <LoginForm />
                        </div>
                    </div>
                </Container>
            </div>
            <Footer/>
        </>
    );
}

export default Customers;