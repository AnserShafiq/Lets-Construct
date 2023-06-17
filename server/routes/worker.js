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
      const workers = await Worker.find({}, 'userName');
      const usernames = workers.map(worker => worker.userName);
      res.json(usernames);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  router.get('/singleWorkers',async(req,res)=>{
    const { workType } = req.body;
    console.log(`In the single worker's router...`)
    try{
      const collection = await Worker.find({workType:{ $regex: 'Single_Worker'}});
      res.json(collection);
    }catch(error){
      console.error('Error retrieving people:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  })
  router.get('/onlyTeam',async(req,res)=>{
    const { workType } = req.body;
    console.log(`In the only team's router...`)
    try{
      const collection = await Worker.find({workType:{ $regex: 'Group_Of_Workers'}});
      res.json(collection);
    }catch(error){
      console.error('Error retrieving people:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  })
  router.get('/contractorWithTeam',async(req,res)=>{
    const { workType } = req.body;
    console.log(`In the contractor with team's router...`)
    try{
      const collection = await Worker.find({workType:{ $regex: 'Contractor_With_Workers'}});
      res.json(collection);
    }catch(error){
      console.error('Error retrieving people:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  })
export default router;