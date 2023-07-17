import React, { useEffect, useState } from 'react';
import './styles.css';
// import { Paper } from "@material-ui/core";
import axios from 'axios';

const InProcessOrders = () => {
  const [outputProducts, setOutputProducts] = useState([]);
  const userdata = JSON.parse(localStorage.getItem('userData'));
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/workerorders/acceptedorders/${userdata?.userName}`);
        setOutputProducts(response.data);
      
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [userdata]);

  const handleOrderDone = async (productId) => {
    try {
        await axios.put(`/workerorders/${productId}`, { orderStatus: "Delivered" });
        // Update the local state to reflect the change
        setOutputProducts(prevProducts => prevProducts.map(product => product._id === productId ? { ...product, orderStatus: "Delivered" } : product));
        } catch (error) {
            console.error('Error accepting order:', error);
        } 
    }

  return (
    <div className='outsidePaperBody'>
      <h3 className='smallSectionHeads'>Accepted Orders</h3>
      <div className='paperBody'>
        {/* Display the fetched products */}
        <ul>
          {outputProducts.map(product => (
            <li key={product._id}>
              
              <div>
                <span className='listHead'>Client:</span> {product.orderPlacer}<br/>
                <span className='listHead'>Address:</span> {product.addressOfOrder}<br/>
                <h5 className='deliverySent' onClick={()=>handleOrderDone(product._id)}>Done</h5>
              </div>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InProcessOrders;
