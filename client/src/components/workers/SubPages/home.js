import React, { useEffect } from 'react';
import Header1 from '../../Header/header.js';
import Footer from '../../Header/footer.js';
import { useState } from 'react';
import './styles.css';
import WorkersNewOrders from './newOrdersList.js';
import InProcessOrders from './inProcessOrders.js';
import CompletedOrders from './ordersGotDone.js';

const WorkersHome = () => {
  const [userdata] = useState(JSON.parse(localStorage.getItem('userData')));
  useEffect (()=>{
    console.log(JSON.parse(localStorage.getItem('userData')))
  },[]);
  return (
    <>
      <Header1 />
      <div className='workerHomeHead'>
        <h1 className=''>Welcome {userdata?.userName}!!!</h1>
      </div>
      <div className='workersBody'>
          <InProcessOrders />
          <CompletedOrders />
      </div>
      <WorkersNewOrders />
      <Footer />
    </>
  );
}

export default WorkersHome;
