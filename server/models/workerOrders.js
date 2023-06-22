import mongoose from "mongoose";

const workerOrders = mongoose.Schema({
    orderPlacer: String,
    orderReceiver: String,
    orderStatus: String,
    description: String,
});

const orders = mongoose.model('WorkerOrders',workerOrders);

export default orders;