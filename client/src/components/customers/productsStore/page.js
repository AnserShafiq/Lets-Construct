import React, { useState, useEffect } from 'react';
import Header1 from '../../Header/header.js';
import Footer from '../../Header/footer.js';
import { Button, TextField } from '@material-ui/core';
import './style.css';
import axios from 'axios';
import { createOrderP } from '../../../actions/ProductDealers/Products/productOrders.js';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';

const ProductsStore = () => {
  const [toSearch, setSearch] = useState('');
  const [outputProducts, setOutputProducts] = useState([]);
  const [userSearch, setUserSearch] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [forOrder, setOrderPlacement] = useState({
    orderPlacer: '',
  orderReceiver: '',
  orderStatus: 'UnAnswer',
  orderedProduct: '',
  orderQuantity: '',
  deliveryAddress: '',
  });
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

  const openModal = (product) => {
    forOrder.orderedProduct = product.title;
    forOrder.orderReceiver = product.dealer;
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };
  const dispatch = useDispatch();
  const handleOrderPlacement = async(e) => {
    if (selectedProduct) {
      e.preventDefault();
      // Place the order for the selected product
      dispatch(createOrderP(forOrder));
      alert('Order got placed...')
      closeModal();
      setOrderPlacement({
        orderPlacer: '',
        orderReceiver: '',
        orderStatus: 'UnAnswer',
        orderedProduct: '',
        orderQuantity: '',
        deliveryAddress: '',
      })
    }
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
        <div className='searchBar' >
          <div className='searchSection'>
            <h4 className='searchTag'>For Search:</h4>
            <input
              name='toSearch'
              type='string'
              label='Enter Here....'
              value={toSearch}
              onSubmit={handleSearch}
              className='searchEntry'
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className='btnDivSearch'>
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
                      Product Description: <p className='description'>{product.description}</p>
                    </h5>
                    <h5 className='innerHead'>
                      Product Quantity: <span className='innerWord'>{product.quantity}</span>
                    </h5>
                    <div className='btnDiv2'>
                      <Button className='orderBtn' variant='contained' color='primary' type='submit' onClick={() => openModal(product)}>
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
                  <div key={product._id} className='productDisplay2'>
                    <div className='notBtn'>
                      <div className='notBtnInner upper'>
                        <h5 className='innerHead2'>
                          Product Name: <span className='innerWord2'>{product.title}</span>
                        </h5>
                        <h5 className='innerHead2 centerBorder'>
                          Product Type: <span className='innerWord2'>{product.type}</span>
                        </h5>
                        <h5 className='innerHead2 centerBorder'>
                          Product Price: <span className='innerWord2'>{product.price}</span>
                        </h5>
                      </div>
                      <div className='notBtnInner lower'>
                        <h5 className='innerHead2'>
                          Product Description: <span className='innerWord2'>{product.description}</span>
                        </h5>
                        <h5 className='innerHead2 centerBorder'>
                          Product Dealer: <span className='innerWord2'>{product.dealer}</span>
                        </h5>
                        <h5 className='innerHead2 centerBorder'>
                          Product Quantity: <span className='innerWord2'>{product.quantity}</span>
                        </h5>
                      </div>
                    </div>
                    <div className='btnDiv3'>
                      <Button className='orderBtn2' variant='contained' color='primary' type='submit' onClick={() => openModal(product)}>
                        Order
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <Modal isOpen={selectedProduct !== null} onRequestClose={closeModal}>
          <h1>Ordering:</h1>
          {selectedProduct && (
            <>
              <h3>Product Name: {selectedProduct.title}</h3>
              <TextField
                required
                name="Placer"
                className='entrySection2'
                type="string"
                variant="outlined"
                label="Enter Your's Username"
                value={forOrder.orderPlacer}
                onChange={(e) => setOrderPlacement({ ...forOrder, orderPlacer: e.target.value })}
              />
              <TextField
                required
                name="Quantity"
                className='entrySection2'
                type="string"
                variant="outlined"
                label="Quantity Required"
                value={forOrder.orderQuantity}
                onChange={(e) => setOrderPlacement({ ...forOrder, orderQuantity: e.target.value })}
              />
              <TextField
                required
                name="Address"
                className='entrySection2'
                type="string"
                variant="outlined"
                label="Address to receive at"
                value={forOrder.deliveryAddress}
                onChange={(e) => setOrderPlacement({ ...forOrder, deliveryAddress: e.target.value })}
              />

              <Button className='orderBtn2 orderFormBtn' variant='contained' color='primary' type='submit' onClick={handleOrderPlacement}>
                Place Order
              </Button>
            </>
          )}
        </Modal>
        <Footer className='footer' />
      </div>
    </>
  );
}

export default ProductsStore;
