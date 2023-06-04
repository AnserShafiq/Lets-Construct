import mongoose from "mongoose";

const newCustomerUserSchema = mongoose.Schema({
    fullName: String,
    nationalID: Number,
    contactNumber: Number,
    emailID: String,
    address: String,
    password: String,
    gender: String,
});

const newCustomer = mongoose.model('Customers',newCustomerUserSchema);

export default newCustomer;