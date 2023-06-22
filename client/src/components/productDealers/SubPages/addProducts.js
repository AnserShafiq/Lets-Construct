import React, { useEffect } from 'react';
import { useState } from 'react';
import './styles.css';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../../actions/ProductDealers/Products/createProduct.js';
const AddProducts = () => {
    const [newProduct, setProduct] = useState({
        title:'',
        type:'',
        price: Number,
        quantity: Number,
        dealer: '',
        description:'',
    });
    const dispatch = useDispatch();
    const [userdata] = useState(JSON.parse(localStorage.getItem('userData')));
    const dealersName = userdata.userName;
    console.log(`=======> ${dealersName}`)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setProduct((prevProduct)=>({...prevProduct, dealer: userdata?.username}));
        const updatedProduct={...newProduct,dealer: userdata?.userName};
        dispatch(createProduct(updatedProduct));
        window.location.reload();
      };
    
    console.log(userdata)
    return (
      <div className='outsidePaperBody'>
      <Paper className='paperBody'>
            <Typography variant='h6' className='formTitle'>Add / Update Products</Typography>
            <form autoComplete="off" onSubmit={handleSubmit} className='productForm'>
            <TextField
            required
            name="title"
            variant="outlined"
            type="string"
            label="Product's Title"
            className='textFeilds'
            value={newProduct.title}
            onChange={(e)=>setProduct((prevProduct)=>({...prevProduct,title: e.target.value}))}
            />
            <TextField required className='textFeilds' name="type" variant="outlined" type="string" label="Product's Type" value={newProduct.type} onChange={(e)=> setProduct((prevProduct)=>({...prevProduct,type:e.target.value}))}/>
            <TextField required className='textFeilds' name="price" variant="outlined" type="number" label="Price" value={newProduct.price} onChange={(e)=> setProduct((prevProduct)=>({...prevProduct,price:e.target.value}))}/>
            <TextField required className='textFeilds' name="quantity" variant="outlined" type="number" label="Quantity" value={newProduct.quantity} onChange={(e)=> setProduct((prevProduct)=>({...prevProduct,quantity:e.target.value}))}/>
            <TextField required className='textFeilds' name="description" variant="outlined" type="string" label="Description" value={newProduct.description} onChange={(e)=> setProduct((prevProduct)=>({...prevProduct,description:e.target.value}))}/>
            <div /*className={classes.FormBtns}*/>
                <Button variant='contained' color="primary" fullWidth type="submit" size='large'>ADD</Button>
            </div>
      </form>
      </Paper></div>
    );
  }
  
  export default AddProducts;
  