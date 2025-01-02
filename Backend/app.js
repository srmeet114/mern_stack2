const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const port = process.env.PORT || 5000;
const path = require('path');
app.use(cors());

dotenv.config();
const mongoUrl = process.env.DB_CONNECT || mongoUrl;

require('./models/model');
require('./models/post');
app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/createPost'));
app.use(require('./routes/user'));
mongoose.connect(mongoUrl);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
})

mongoose.connection.on('error', () => {
    console.log('not connected to MongoDB');
})

// serving the frontend
app.use(express.static(path.join(__dirname,"./Frontend/dist")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./frontend/dist/index.html")),
    function(err){
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});