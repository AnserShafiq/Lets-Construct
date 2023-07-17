import express from 'express';
import { createProduct } from '../controllers/product.js';
import Products from '../models/products.js';
const router = express.Router();

router.post('/',createProduct);
router.get('/productsSearch',async(req,res)=>{
  // const { workType } = req.body;
  // console.log(`In the only team's router...`)
  const searchQuery = req.query.search;
  if( searchQuery == null)
  {
    try{
      const collection = await Products.find({});
      // console.log(collection)
      res.json(collection);
    }catch(error){
      console.error('Error retrieving people:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  else{
    try {
      const products = await Products.find({ title: { $regex: searchQuery, $options: 'i' } });
      res.json(products);
    } catch (error) {
      console.error('Error retrieving products:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});
router.get(`/:ownerID`, async (req, res) => {
    const ownerID = req.params.ownerID;
    try {
      const product = await Products.find({dealer: ownerID});
      res.json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
export default router;