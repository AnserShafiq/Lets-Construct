import React, { useEffect } from 'react';
import Header from '../../Header/header.js';
import Footer from '../../Header/footer.js';
import { useState } from 'react';
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
      <div className='A'>
        <h1 className=''>Welcome {userdata?.userName}!, {userdata?._id}</h1>
      </div>
      <Footer />
    </>
  );
}

export default WorkersHome;
