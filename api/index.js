import express from 'express';
import { User, addDoc } from './config.js';
const app = express();

app.use(express.json());

app.post('/create', async (req, res) => {
  const data=req.body;
  await addDoc(User,data);
  res.send({msg: "User Created"});
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

