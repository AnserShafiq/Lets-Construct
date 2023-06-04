import worker from "../models/worker.js";

export const createWorker = async (req,res) => {
    const user = req.body;
    const newUser = new worker(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
};