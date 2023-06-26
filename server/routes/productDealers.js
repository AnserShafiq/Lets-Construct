import express from 'express';
import { createProductDealer } from '../controllers/productDealers.js';
import productDealers from '../models/productDealers.js';
const router = express.Router();

router.post('/',createProductDealer);

router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    try {
      // console.log(`Product Dealers ===> POST ROUTER, ${userName}`);
      
      const user = await productDealers.findOne({ userName });
      if (!user) {
        return res.status(404).json({ message: 'Your User Name Not Found.' });
      }
      if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      // console.log(`==> ${user}`);
      return res.status(200).json({ message: 'Login successful',data: user });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
router.get('/usernames', async (req, res) => {
    try {
      const workers = await productDealers.find({}, 'userName');
      const usernames = workers.map(productDealers => productDealers.userName);
      res.json(usernames);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
export default router;