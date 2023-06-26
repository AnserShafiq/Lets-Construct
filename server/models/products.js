import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  filename: String,
  filePath: String
});

const productSchema = new mongoose.Schema({
  title: String,
  type: String,
  price: Number,
  quantity: Number,
  dealer: String,
  description: String,
  images: [imageSchema]
});

const Product = mongoose.model('Product', productSchema);

export default Product;
