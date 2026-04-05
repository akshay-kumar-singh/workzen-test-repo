require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});