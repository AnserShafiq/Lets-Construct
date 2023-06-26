import React from 'react';
import {Routes,Route }  from "react-router-dom";
import Home from './Pages/Home/Home.js';
import Customers from './Pages/Customers/customer.js';
import CustomersHome from './components/customers/homeOfCustomer.js';
import Workers from './Pages/Workers/home.js';
import WorkersHome from './components/workers/SubPages/home.js';
import WorkerSearch from './components/customers/workersorlabors/page.js'
import CostEstimation from './components/customers/costEstimation/page.js'
import ProductsStore from './components/customers/productsStore/page.js'
import ProductDealers from './Pages/ProductDealers/Home.js';
import ProductDealersHome from './components/productDealers/SubPages/home.js';
const App = () =>{
    return(
        <>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/Customers' element={<Customers/>}/>
                <Route path='/Customers/CustomersHome' element={<CustomersHome/>}/>
                <Route path='/Workers' element={<Workers/>}/>
                <Route path='/Workers/WorkersHome' element={<WorkersHome/>}/>
                <Route path='/Customers/CustomersHome/WorkersSearch' element={<WorkerSearch/>}/>
                <Route path='/Customers/CustomersHome/CostEstimation' element={<CostEstimation/>}/>
                <Route path='/Customers/CustomersHome/ProductsStore' element={<ProductsStore/>}/>
                <Route path='/ProductDealers' element={<ProductDealers/>}/>
                <Route path='/ProductDealers/Home' element={<ProductDealersHome/>}/>

            </Routes>
        </>
        
    );
}

export default App;