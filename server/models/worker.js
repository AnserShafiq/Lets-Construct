import mongoose from "mongoose";

const newWorkerUserSchema = mongoose.Schema({
  userName: String,
  nationalID: Number,
  contactNumber: Number,
  emailID: String,
  city: String,
  password: String,
  gender: String,
  workType: String,
  workCategories: String,
  groupDescription: String,
  
});

const worker = mongoose.model('Workers',newWorkerUserSchema);

export default worker;