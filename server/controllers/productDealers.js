import productDealers from "../models/productDealers.js";

export const createProductDealer = async (req,res) => {
    const user = req.body;
    const newUser = new productDealers(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
};