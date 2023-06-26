
import Product from '../models/products.js';

export const createProduct = async (req, res) => {
  const { title, type, price, quantity, dealer, description } = req.body;
  const images = req.files.map((file) => ({
    filename: file.originalname,
    filePath: file.path
  }));

  const newProduct = new Product({
    title,
    type,
    price,
    quantity,
    dealer,
    description,
    images
  });

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
