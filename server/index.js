import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// Routes:
import newCustomerRoutes from './routes/newCustomer.js';
import newWorkerRoutes from './routes/worker.js';
import User from './models/newCustomerUser.js';
import Worker from './models/worker.js';
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/customers', newCustomerRoutes);
app.use('/customers/login',newCustomerRoutes);
app.use('/workers', newWorkerRoutes);
app.use('/workers/login',newWorkerRoutes);


const CONNECTION_URL =
  'mongodb+srv://two:onetwothree@fyp.8i5tqbr.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server started to run on PORT: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
