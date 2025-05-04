const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.json({ message: "Hello from Node.js backend!" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
const axios = require('axios');

app.post('/predict', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:6000/predict', {
      features: req.body.features
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
