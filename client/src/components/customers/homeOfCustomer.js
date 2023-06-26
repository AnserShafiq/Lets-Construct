import React from 'react';
import Header1 from '../Header/header.js';
import Footer from '../Header/footer.js';
import './customersStyle.css';
import magnifierPhoto from '../../images/magnifierPic.png';
import costEstimation from '../../images/costEstimation.png';
import workerLabors from '../../images/workersLabors.png';
import buildingModels from '../../images/buildingModels.png';
import productStore from '../../images/productStore.png';
import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';


const CustomersHome = () =>{

    const navigator = useNavigate();
    const [userdata] = useState(JSON.parse(localStorage.getItem('userData')));
    useEffect (()=>{
        console.log(JSON.parse(localStorage.getItem('userData')))
    },[]);
    const handleLaborSearch = () =>{
        navigator('/Customers/CustomersHome/WorkersSearch');
    }

    const handleCostEstimation = () =>{
        navigator('/Customers/CustomersHome/CostEstimation');
    }
    const handleProductStore= ()=>{
        navigator('/Customers/CustomersHome/ProductsStore');
    }
    return(
        <>
            <Header1 />
                <div maxWidth='lg' className='toDividePage'>
                    <div className='divOne'>
                        <h1 className = 'mainHead'>Hello,</h1>
                        <h1 className = 'mainHead' style={{textTransform: 'upperCase'}}>{userdata.user.fullName}</h1>
                        <h3 className = 'askingLine'>What are you <br/>looking for?</h3>
                        <img src={magnifierPhoto} className='mangnifierPhoto' alt="magnifierPic"/>
                    </div>
                    <div className='divTwo'>
                        <div className='divBox sec1'>
                            <img src={workerLabors} className='btnImg1' alt='workerLabor' onClick={handleLaborSearch}/>
                            <img src={costEstimation} className='btnImg1' alt='costEstimate' onClick={handleCostEstimation}/>
                        </div>
                        <div className='divBox sec2'>
                            <img src={buildingModels} className='btnImg1' alt='workerLabor'/>
                            <img src={productStore} className='btnImg1' alt='productsStore' onClick={handleProductStore}/>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    );
}

export default CustomersHome;