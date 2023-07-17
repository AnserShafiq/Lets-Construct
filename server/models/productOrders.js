import mongoose from "mongoose";

const ProductOrders = mongoose.Schema({
    orderPlacer: String,
    orderReceiver: String,
    orderStatus: String,
    orderedProduct:String,
    orderQuantity: String,
    deliveryAddress: String,
});

const orders = mongoose.model('ProductOrders',ProductOrders);

export default orders;