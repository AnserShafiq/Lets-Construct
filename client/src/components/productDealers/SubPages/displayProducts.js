// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import './styles.css';
// import { TextField, Button, Typography, Paper } from "@material-ui/core";
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';

// const DisplayProducts = () => {
//     const [OutputProducts,setOutputProducts] = useState([]);
//     const [userdata] = useState(JSON.parse(localStorage.getItem('userData')));
//     console.log(`from displayProducts => ${userdata}`)



//     const response = axios.get(`/products/${userdata?.userName}`);
//     console.log(`response from displayProducts => ${response}`,response)
//     // setOutputProducts(response.data);
//     return (
//       <div className='outsidePaperBody'>
//         <Paper className='paperBody'>
//             {/* <h3>Welcome...</h3> */}
//         </Paper>
//       </div>
//     );
//   }
  
//   export default DisplayProducts;
import React, { useEffect, useState } from 'react';
import './styles.css';
import { Paper } from "@material-ui/core";
import axios from 'axios';

const DisplayProducts = () => {
  const [outputProducts, setOutputProducts] = useState([]);
  const userdata = JSON.parse(localStorage.getItem('userData'));
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/products/${userdata?.userName}`);
        setOutputProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [userdata]);

  return (
    <div className='outsidePaperBody'>
      <Paper className='paperBody'>
        {/* Display the fetched products */}
        <h3>Products:</h3>
        <ul>
          {outputProducts.map(product => (
            <li key={product._id}>
              
              <div>
                <span className='listHead'>Title:</span> {product.title}
                <span className='listHead'>, Type:</span> {product.type}
                <span className='listHead'>,<br/> Price:</span> {product.price}
                <span className='listHead'>, Quantity:</span> {product.quantity}
              </div>
              
            </li>
          ))}
        </ul>
      </Paper>
    </div>
  );
}

export default DisplayProducts;
