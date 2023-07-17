// import React, { useEffect, useState } from 'react';
// import './styles.css';
// import {  Button } from "@material-ui/core";
// import axios from 'axios';

// const WorkersNewOrders = () => {
//   const [outputProducts, setOutputProducts] = useState([]);
//   const userdata = JSON.parse(localStorage.getItem('userData'));
  
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // console.log(`==> ${userdata?.userName}`)
//         const response = await axios.get(`/workerorders/neworders/${userdata?.userName}`);
//         setOutputProducts(response.data);
      
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };
//     fetchProducts();
//   }, [userdata]);
//     const handleReject = async (productId) => {
//     try {
//         await axios.put(`/workerorders/${productId}`, { orderStatus: "Rejected" });
//       // Update the local state to reflect the change
//         setOutputProducts(prevProducts => prevProducts.map(product => product._id === productId ? { ...product, orderStatus: "Rejected" } : product));
//         } catch (error) {
//             console.error('Error rejecting order:', error);
//         } 
//     }
//     const handleAccepted = async (productId) => {
//     try {
//         await axios.put(`/workerorders/${productId}`, { orderStatus: "Accepted" });
//         // Update the local state to reflect the change
//         setOutputProducts(prevProducts => prevProducts.map(product => product._id === productId ? { ...product, orderStatus: "Accepted" } : product));
//         } catch (error) {
//             console.error('Error accepting order:', error);
//         } 
//     }


//   return (
//     <div className='outsidePaperBody2'>
//       <h3 className='newOrdersListHead'>New Orders</h3>
//       <div className='paperBody2'>
//         <ul>
//             {outputProducts.map(product => (
//                 <li key={product._id}>
//                 <div key={product._id} className='productDisplay2'>
//                         <div className='notBtn'>
//                         <div className='notBtnInner upper'>
//                             <h5 className='innerHead2'>
//                             Customer Name: <span className='innerWord2'>{product.orderPlacer}</span>
//                             </h5>
//                             <h5 className='innerHead2 centerBorder'>
//                             Address: <span className='innerWord2'>{product.addressOfOrder}</span>
//                             </h5>
//                         </div>
//                         <div className='notBtnInner lower'>
//                             <h5 className='innerHead2'>
//                             Description: <span className='innerWord2'>{product.description}</span>
//                             </h5>
//                         </div>
//                         </div>
//                         <div className='btnDiv'>
//                         <Button className='acceptBtn' variant='contained' color='primary' type='submit' onClick={()=>handleAccepted(product._id)}>
//                             Accept
//                         </Button>
//                         <Button className='acceptBtn' variant='contained' color='primary' type='submit' onClick={()=>handleReject(product._id)}>
//                             Reject
//                         </Button>
//                         </div>
//                     </div>
                
//                 </li>
//             ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default WorkersNewOrders;
import React, { useEffect, useState } from 'react';
import './styles.css';
import { Button } from "@material-ui/core";
import axios from 'axios';

const WorkersNewOrders = () => {
  const [outputProducts, setOutputProducts] = useState([]);
  const userdata = JSON.parse(localStorage.getItem('userData'));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/workerorders/neworders/${userdata?.userName}`);
        setOutputProducts(response.data);

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [userdata]);

  const handleReject = async (productId) => {
    try {
      await axios.put(`/workerorders/${productId}`, { orderStatus: "Rejected" });
      // Update the local state to reflect the change
      setOutputProducts(prevProducts => prevProducts.map(product => product._id === productId ? { ...product, orderStatus: "Rejected" } : product));
    } catch (error) {
      console.error('Error rejecting order:', error);
    }
  };

  const handleAccepted = async (productId) => {
    try {
      await axios.put(`/workerorders/${productId}`, { orderStatus: "Accepted" });
      // Update the local state to reflect the change
      setOutputProducts(prevProducts => prevProducts.map(product => product._id === productId ? { ...product, orderStatus: "Accepted" } : product));
    } catch (error) {
      console.error('Error accepting order:', error);
    }
  };

  return (
    <div className='outsidePaperBody2'>
      <h3 className='newOrdersListHead'>New Orders</h3>
      <div className='paperBody2'>
        {outputProducts.length === 0 ? (
          <p className='noNewOrder'>No Order TO Show....</p>
        ) : (
          <ul>
            {outputProducts.map(product => (
              <li key={product._id}>
                <div key={product._id} className='productDisplay2'>
                  <div className='notBtn'>
                    <div className='notBtnInner upper'>
                      <h5 className='innerHead2'>
                        Customer Name: <span className='innerWord2'>{product.orderPlacer}</span>
                      </h5>
                      <h5 className='innerHead2 centerBorder'>
                        Address: <span className='innerWord2'>{product.addressOfOrder}</span>
                      </h5>
                    </div>
                    <div className='notBtnInner lower'>
                      <h5 className='innerHead2'>
                        Description: <span className='innerWord2'>{product.description}</span>
                      </h5>
                    </div>
                  </div>
                  <div className='btnDiv'>
                    <Button className='acceptBtn' variant='contained' color='primary' type='submit' onClick={() => handleAccepted(product._id)}>
                      Accept
                    </Button>
                    <Button className='acceptBtn' variant='contained' color='primary' type='submit' onClick={() => handleReject(product._id)}>
                      Reject
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WorkersNewOrders;
