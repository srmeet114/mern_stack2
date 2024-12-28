const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
app.use(cors());

dotenv.config();

const port = process.env.PORT || 5000;

const mongoUrl = process.env.DB_CONNECT || mongoUrl;

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


app.get('/', (req, res) => {
    res.send({ message: 'Hello World!' });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});