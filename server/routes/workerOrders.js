import express  from "express";
import { createOrder, updateOrderStatus } from "../controllers/workerOrders.js";
import workerOrders from '../models/workerOrders.js';

const router = express.Router();

router.put('/:orderId', updateOrderStatus);

router.post('/',createOrder);

router.get(`/neworders/:ownerID`, async (req, res) => {
    const ownerID = req.params.ownerID;
    try {
        // console.log(ownerID);
      const product = await workerOrders.find({orderReceiver: ownerID, orderStatus: "UnAnswered"});
      res.json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  router.get(`/acceptedorders/:ownerID`, async (req, res) => {
    const ownerID = req.params.ownerID;
    try {
      const product = await workerOrders.find({orderReceiver: ownerID, orderStatus: "Accepted"});
      res.json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  router.get(`/doneorders/:ownerID`, async (req, res) => {
    const ownerID = req.params.ownerID;
    try {
      const product = await workerOrders.find({orderReceiver: ownerID, orderStatus: "Delivered"});
      res.json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

export default router;