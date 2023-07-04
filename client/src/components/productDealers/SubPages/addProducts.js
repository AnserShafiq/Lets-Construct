  
import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import axios from 'axios';

const AddProducts = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState(Number);
  const [quantity, setQuantity] = useState(Number);
  const [dealer, setDealer] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  // SETTING IMAGES INTO ARRAY FROM HERE
  const handleImageChange = (event) => {
    setSelectedImages(event.target.files);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();



    const formData = new FormData();
    formData.append('title', title);
    formData.append('type', type);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('dealer', dealer);
    formData.append('description', description);
    for (let i = 0; i < selectedImages.length; i++) {
      formData.append('images', selectedImages[i]);
    }

    try {
      await axios.post('/products', formData);
      setTitle('');
      setType('');
      setPrice('');
      setQuantity('');
      setDealer('');
      setDescription('');
      setSelectedImages([]);
    } catch (error) {
      console.error('Error uploading product', error);
      alert('Error uploading product');
    }
  };

  return (
    <div className="outsidePaperBody">
      <Paper className="paperBody">
        <Typography variant="h6" className="formTitle">
          Add / Update Products
        </Typography>
        <form autoComplete="off" onSubmit={handleSubmit} className="productForm">
          <TextField required name="title" variant="outlined" type="string" label="Product's Title"
            className="textFeilds" value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextField required className="textFeilds" name="type" variant="outlined" type="string"
            label="Product's Type" value={type} onChange={(e) => setType(e.target.value)} />
          <TextField required className="textFeilds" name="price" variant="outlined"
            type="number" label="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
          <TextField required className="textFeilds" name="quantity" variant="outlined" type="number"
            label="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          <TextField required className="textFeilds" name="dealer" variant="outlined" type="string"
            label="Dealer's Name" value={dealer} onChange={(e) => setDealer(e.target.value)} />
          <TextField required className="textFeilds" name="description" variant="outlined" type="string"
            label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          
          {/* IMAGES INPUT FROM HERE */}
          <input type="file" accept="image/*" multiple onChange={handleImageChange} className='textFeilds'/>
          
          
          <div>
            <Button variant="contained" color="primary" fullWidth type="submit" size="large">ADD</Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};
export default AddProducts;
