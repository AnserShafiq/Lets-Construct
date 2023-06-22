import Orders from "../models/workerOrders.js";

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