import React from 'react';
import {Routes,Route }  from "react-router-dom";
import Home from './Pages/Home/Home.js';
import Customers from './Pages/Customers/customer.js';
import CustomersHome from './components/customers/homeOfCustomer.js';
const App = () =>{
    return(
        <>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/Customers' element={<Customers/>}/>
                <Route path='/Customers/CustomersHome' element={<CustomersHome/>}/>
            </Routes>
        </>
        
    );
}

export default App;