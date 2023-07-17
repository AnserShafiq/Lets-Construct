import express  from "express";
import { createOrder,updateOrderStatus } from "../controllers/productOrders.js";
import productOrders from '../models/productOrders.js';

const router = express.Router();

router.post('/',createOrder);

router.put('/:orderId', updateOrderStatus);

router.get('/receiver', async (req, res) => {
    try {
      const workers = await productOrders.find({}, 'orderReceiver');
      const usernames = workers.map(productOrders => productOrders.orderReceiver);
      res.json(usernames);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
});
router.get(`/neworders/:ownerID`, async (req, res) => {
  const ownerID = req.params.ownerID;
  try {
    const product = await productOrders.find({orderReceiver: ownerID, orderStatus: "UnAnswer"});
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get(`/acceptedorders/:ownerID`, async (req, res) => {
  const ownerID = req.params.ownerID;
  try {
    const product = await productOrders.find({orderReceiver: ownerID, orderStatus: "Accepted"});
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
export default router;