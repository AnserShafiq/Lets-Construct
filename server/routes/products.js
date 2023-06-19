import express from 'express';
import { createProduct } from '../controllers/product.js';
import products from '../models/products.js';
const router = express.Router();

router.post('/',createProduct);

router.get(`/:ownerID`, async (req, res) => {
    const ownerID = req.params.ownerID;
    try {
      const product = await products.find({dealer: ownerID});
      console.log(`Products From ProductRoute => ${product}`)
      res.json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
export default router;