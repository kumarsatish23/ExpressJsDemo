const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const employeeController = require('./src/controllers/employeeController');
const errorHandler = require('./middleware/error-handler'); // Example error handling middleware

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware for parsing JSON requests
app.use(express.json());

// Routes
app.use('/employees', employeeController);

// Global error handling middleware (place at the end of middleware chain)
app.use(errorHandler);

// MongoDB Connection
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error('Error connecting to MongoDB:', err.message));
