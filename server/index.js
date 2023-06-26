import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import multer from 'multer';

// Routes
import newCustomerRoutes from './routes/newCustomer.js';
import newWorkerRoutes from './routes/worker.js';
import productDealers from './routes/productDealers.js';
import forProducts from './routes/products.js';
import workerOrderPlacement from './routes/workerOrders.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());


const storage = multer.memoryStorage();
const upload = multer({ storage });
app.use(upload.array('images', 5)); 

// Routes setup
app.use('/customers', newCustomerRoutes);
app.use('/customers/login', newCustomerRoutes);
app.use('/workers', newWorkerRoutes);
app.use('/workers/login', newWorkerRoutes);
app.use('/workers/singleWorkers', newWorkerRoutes);
app.use('/workers/onlyTeam', newWorkerRoutes);
app.use('/workers/contractorWithTeam', newWorkerRoutes);
app.use('/productdealers', productDealers);
app.use('/productdealers/login', productDealers);
app.use('/products', forProducts);
app.use('/products/:ownerID', forProducts);
app.use('/workerorders', workerOrderPlacement);

const CONNECTION_URL = 'mongodb+srv://two:onetwothree@fyp.8i5tqbr.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started to run on PORT: ${PORT}`));
  })
  .catch((error) => console.log(error.message));
