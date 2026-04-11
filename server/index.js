require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/users/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }
    // Add password verification logic here
    res.send({ message: 'Login successful' });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
});

app.post('/api/users/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send({ message: 'Signup successful' });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});