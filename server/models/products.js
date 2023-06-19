import mongoose from "mongoose";

const newProductSchema = mongoose.Schema({
    title: String,
    type: String,
    price: Number,
    quantity: Number,
    dealer: String,
    description: String,
});

const product = mongoose.model('Product',newProductSchema);

export default product;