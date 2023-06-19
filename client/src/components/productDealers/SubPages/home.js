import React, { useEffect } from 'react';
import Header from '../../Header/header.js';
import Footer from '../../Header/footer.js';
import { useState } from 'react';
import AddProducts from './addProducts.js';
import DisplayProducts from './displayProducts.js';
import './styles.css';

const WorkersHome = () => {
  // const userName = useSelector((state) => state.worker.userName);
  const [userdata] = useState(JSON.parse(localStorage.getItem('userData')));
  useEffect (()=>{
    console.log(JSON.parse(localStorage.getItem('userData')))
  },[]);
  return (
    <>
      <Header />
      <h1 className=''>Welcome {userdata?.userName}!</h1>
      <div className='dealersBody'>

          <DisplayProducts />
          <AddProducts />
      </div>
      
      <Footer />
    </>
  );
}

export default WorkersHome;
