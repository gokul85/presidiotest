const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');

app.use(express.json());

mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));



app.listen(5000, () => {
    console.log(`Server is running`);
});

