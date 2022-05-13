console.log('Hello');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/v1/auth');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({ msg: 'Server is running' });
});

app.use('/v1/auth', authRoutes);

app.all('*', (req, res) => {
  return res.status(404).send({ err: 'Page not found' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
