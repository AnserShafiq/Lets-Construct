import mongoose from "mongoose";

const newProductDealerUserSchema = mongoose.Schema({
  userName: String,
  businessTitle: String,
  nationalID: Number,
  contactNumber: Number,
  emailID: String,
  area: String,
  city: String,
  password: String,
});

const worker = mongoose.model('ProductDealers',newProductDealerUserSchema);

export default worker;