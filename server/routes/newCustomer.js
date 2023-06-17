import express from 'express';
import { createCustomer } from '../controllers/newCustomer.js';
import User from '../models/newCustomerUser.js';
const router = express.Router();

router.post('/',createCustomer);

router.post('/login', async (req, res) => {
    const { fullName, password } = req.body;
    try {
      console.log('Customers ===> GET ROUTER');
      const user = await User.findOne({ fullName });
      if (!user) {
        return res.status(404).json({ message: 'Your User Name Not Found.' });
      }
      if (user.password !== password) {
        console.log(`${user.password} !== ${password}`)
        return res.status(401).json({ message: 'Invalid password' });
      }
      console.log(`==> ${user}`);
      return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  router.get('/usernames', async (req, res) => {
    try {
      const customers = await User.find({}, 'fullName');
      const usernames = customers.map(customer => customer.fullName);
      res.json(usernames);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
export default router;