import express from 'express';
import { createWorker } from '../controllers/worker.js';
import Worker from '../models/worker.js';
const router = express.Router();

router.post('/',createWorker);

router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    try {
      console.log('Workers ===> POST ROUTER');
      const user = await Worker.findOne({ userName });
      if (!user) {
        return res.status(404).json({ message: 'Your User Name Not Found.' });
      }
      if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      console.log(`==> ${user}`);
      return res.status(200).json({ message: 'Login successful',data: user });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  router.get('/usernames', async (req, res) => {
    try {
      // Fetch all workers from the database
      const workers = await Worker.find({}, 'userName');
  
      // Extract usernames from the workers
      const usernames = workers.map(worker => worker.userName);
  
      // Send the usernames as a response
      res.json(usernames);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

export default router;