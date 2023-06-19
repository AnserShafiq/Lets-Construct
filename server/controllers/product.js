import Products from "../models/products.js";

export const createProduct = async (req,res) => {
    const user = req.body;
    const newUser = new Products(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
};