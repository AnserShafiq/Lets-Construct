import React, { useEffect, useState } from 'react';
import './styles.css';
// import { Paper } from "@material-ui/core";
import axios from 'axios';

const CompletedOrders = () => {
  const [outputProducts, setOutputProducts] = useState([]);
  const userdata = JSON.parse(localStorage.getItem('userData'));
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/workerorders/doneorders/${userdata?.userName}`);
        setOutputProducts(response.data);
      
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [userdata]);


  return (
    <div className='outsidePaperBody'>
      <h3 className='smallSectionHeads'>Orders Completed</h3>
      <div className='paperBody'>
        {/* Display the fetched products */}
        <ul>
          {outputProducts.map(product => (
            <li key={product._id}>
              
              <div>
                <span className='listHead'>Client:</span> {product.orderPlacer}<br/>
                <span className='listHead'>Address:</span> {product.addressOfOrder}<br/>

              </div>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CompletedOrders;
