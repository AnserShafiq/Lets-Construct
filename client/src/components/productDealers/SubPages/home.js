import React, { useEffect } from 'react';
import Header1 from '../../Header/header.js';
import Footer from '../../Header/footer.js';
import { useState } from 'react';
import AddProducts from './addProducts.js';
import DisplayProducts from './displayProducts.js';
import './styles.css';
import NewOrders from './displayNewOrders.js';
import AcceptedOrders from './acceptedOrders.js';

const WorkersHome = () => {
  const [userdata] = useState(JSON.parse(localStorage.getItem('userData')));
  useEffect (()=>{
    console.log(JSON.parse(localStorage.getItem('userData')))
  },[]);
  return (
    <>
      <Header1 />
      <h1 className='dealersHomeHead'>Welcome {userdata?.userName}!</h1>
      <div className='dealersBody'>
          <DisplayProducts />
          <AcceptedOrders/>
          <AddProducts />
      </div>
      <NewOrders />
      <Footer />
    </>
  );
}

export default WorkersHome;
