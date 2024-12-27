const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const mongoUrl = require('./keys');
const cors = require('cors');

require('./models/model');
app.use(express.json());
app.use(require('./routes/auth'));
mongoose.connect(mongoUrl);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
})

mongoose.connection.on('error', () => {
    console.log('not connected to MongoDB');
})

app.use(cors());

app.get('/', (req, res) => {
    res.send({ message: 'Hello World!' });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});