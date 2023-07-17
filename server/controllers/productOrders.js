import Orders from "../models/productOrders.js";

export const createOrder = async (req,res) => {
    const order = req.body;
    const newOrder = new Orders(order);
    try {
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
};
export const updateOrderStatus = async (req, res) => {
    const orderId = req.params.orderId;
    const { orderStatus } = req.body;
  
    try {
      const updatedOrder = await Orders.findByIdAndUpdate(
        orderId,
        { orderStatus },
        { new: true }
      );
      res.json(updatedOrder);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };