import newCustomer from "../models/newCustomerUser.js";

export const createCustomer = async (req,res) => {
    const user = req.body;
    const newUser = new newCustomer(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
};