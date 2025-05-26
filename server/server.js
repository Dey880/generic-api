const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const apiRoutes = require('./routes/apiRoutes');

const logMiddleware = require('./middleware/log')

const app = express();

mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Database connection error:', err));

let corsOptions = {
    methods: ['GET', 'POST', 'DELETE']
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logMiddleware);


app.use('/', apiRoutes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});