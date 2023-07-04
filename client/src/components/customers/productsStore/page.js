// import React, { useState, useEffect } from 'react';
// import Header1 from '../../Header/header.js';
// import Footer from '../../Header/footer.js';
// import { Button } from '@material-ui/core';
// import './style.css';
// import axios from 'axios';

// const ProductsStore=()=>{
//     const [toSearch, setSearch] = useState('');
//     const [outputProducts, setOutputProducts] = useState([]);
//     const [userSearch, setUserSearch] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//           const response = await axios.get(`/products/productsSearch`);
//           setOutputProducts(response.data);
//           console.log(response.data);
//         };
      
//         fetchData();
//       }, []);
//     const handleSearch = () =>{
//         setUserSearch(true);
//     };
      
//     return(
//         <>
//             <Header1/>
//             <div className='container'>
//                 <div className='pageLink'>
//                     <h4>
//                     ={'>'} <a href='/Customers/CustomersHome' className='linkBtn'>Customers</a> ={'>'} <a href='/Customers/CustomersHome/ProductsStore' className='linkBtn'>Product's Store</a>
//                     </h4>
//                 </div>
//                 <h4 className='pageHead'>Welcome to the materials market</h4>
//                 <div className='searchBar'>
//                     <div className='searchSection'>
//                         <h4 className='searchTag'>For Search:</h4>
//                         <input name='toSearch' type='string' label='Enter Here....' value={toSearch} className='searchEntry' onChange={(e)=>setSearch(e.target.value)}/>
//                     </div>
//                     <div className='btnDiv'>
//                         <Button className='searchBtn' variant='contained' color="primary" type="submit" onClick={handleSearch}>Search</Button>
//                     </div>
//                 </div>
//                 <div>
//                     {!userSearch && (
//                         <h4 className='productsHead'>Some Product's:</h4>
//                         <div className='fourProducts'>
//                         {outputProducts.slice(0, 4).map((product) => (
//                             <div key={product._id} className='productDisplay'>
//                                 {/* <img alt='productImg' src={product.images}/> */}
//                                 <h5 className='innerHead'>Product Name: <span className='innerWord'>{product.title}</span></h5>
//                                 <h5 className='innerHead'>Product Type: <span className='innerWord'>{product.type}</span></h5>
//                                 <h5 className='innerHead'>Product Price: <span className='innerWord'>{product.price}</span></h5>
//                                 <h5 className='innerHead'>Product Dealer: <span className='innerWord'>{product.dealer}</span></h5>
//                                 <h5 className='innerHead'>Product Quantity: <span className='innerWord'>{product.quantity}</span></h5>
//                                 {/* Display other product details as needed */}
//                                 <div className='btnDiv2'>
//                                     <Button className='orderBtn' variant='contained' color="primary" type="submit" >Order</Button>
//                                 </div>
//                             </div>
//                         ))}
//                         </div>
//                     )}
//                 </div>
//             <Footer className='footer'/>
//             </div>
//         </>
//     );
// }

// export default ProductsStore;
import React, { useState, useEffect } from 'react';
import Header1 from '../../Header/header.js';
import Footer from '../../Header/footer.js';
import { Button } from '@material-ui/core';
import './style.css';
import axios from 'axios';

const ProductsStore = () => {
  const [toSearch, setSearch] = useState('');
  const [outputProducts, setOutputProducts] = useState([]);
  const [userSearch, setUserSearch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/products/productsSearch`);
      setOutputProducts(response.data);
      console.log(response.data);
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    setUserSearch(true);
    const response = await axios.get(`/products/productsSearch?search=${toSearch}`);
    setOutputProducts(response.data);
    console.log(`===> ${response.data}`);
  };

  return (
    <>
      <Header1 />
      <div className='container'>
        <div className='pageLink'>
          <h4>
            =&gt; <a href='/Customers/CustomersHome' className='linkBtn'>Customers</a> =&gt; <a href='/Customers/CustomersHome/ProductsStore' className='linkBtn'>Product's Store</a>
          </h4>
        </div>
        <h4 className='pageHead'>Welcome to the materials market</h4>
        <div className='searchBar'>
          <div className='searchSection'>
            <h4 className='searchTag'>For Search:</h4>
            <input
              name='toSearch'
              type='string'
              label='Enter Here....'
              value={toSearch}
              className='searchEntry'
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className='btnDiv'>
            <Button
              className='searchBtn'
              variant='contained'
              color='primary'
              type='submit'
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>
        <div>
          {!userSearch && (
            <>
              <h4 className='productsHead'>Some Product's:</h4>
              <div className='fourProducts'>
                {outputProducts.slice(0, 4).map((product) => (
                  <div key={product._id} className='productDisplay'>
                    <h5 className='innerHead'>
                      Product Name: <span className='innerWord'>{product.title}</span>
                    </h5>
                    <h5 className='innerHead'>
                      Product Type: <span className='innerWord'>{product.type}</span>
                    </h5>
                    <h5 className='innerHead'>
                      Product Price: <span className='innerWord'>{product.price}</span>
                    </h5>
                    <h5 className='innerHead'>
                      Product Dealer: <span className='innerWord'>{product.dealer}</span>
                    </h5>
                    <h5 className='innerHead'>
                      Product Quantity: <span className='innerWord'>{product.quantity}</span>
                    </h5>
                    <div className='btnDiv2'>
                      <Button className='orderBtn' variant='contained' color='primary' type='submit'>
                        Order
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {userSearch && (
            <>
              <h4 className='productsHead'>Searched Products:</h4>
              <div className='allProducts'>
                {outputProducts.map((product) => (
                  <div key={product._id} className='productDisplay'>
                    <h5 className='innerHead'>
                      Product Name: <span className='innerWord'>{product.title}</span>
                    </h5>
                    <h5 className='innerHead'>
                      Product Type: <span className='innerWord'>{product.type}</span>
                    </h5>
                    <h5 className='innerHead'>
                      Product Price: <span className='innerWord'>{product.price}</span>
                    </h5>
                    <h5 className='innerHead'>
                      Product Dealer: <span className='innerWord'>{product.dealer}</span>
                    </h5>
                    <h5 className='innerHead'>
                      Product Quantity: <span className='innerWord'>{product.quantity}</span>
                    </h5>
                    <div className='btnDiv2'>
                      <Button className='orderBtn' variant='contained' color='primary' type='submit'>
                        Order
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <Footer className='footer' />
      </div>
    </>
  );
}

export default ProductsStore;
