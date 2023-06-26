import React, { useEffect } from 'react';
import Header1 from '../../Header/header.js';
import Footer from '../../Header/footer.js';
import { useState } from 'react';
import './styles.css';

const WorkersHome = () => {
  const [userdata] = useState(JSON.parse(localStorage.getItem('userData')));
  useEffect (()=>{
    console.log(JSON.parse(localStorage.getItem('userData')))
  },[]);
  return (
    <>
      <Header1 />
      <div className='A'>
        <h1 className=''>Welcome {userdata?.userName}!!!</h1>
      </div>
      <Footer />
    </>
  );
}

export default WorkersHome;
