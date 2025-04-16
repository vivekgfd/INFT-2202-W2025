/**
 * File: app.js
 * Author: Vivekkumar Panjabi
 * Student ID: 100950706
 * Date: April 16, 2024
 * Description: Main application file for the Animal Management System
 */

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

// Set up middleware for handling JSON, form data, static files, and HTTP method override
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// Configure the view engine to use EJS templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Establish connection to MongoDB database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/animal_db', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        console.log('Please make sure MongoDB is installed and running on your system');
        console.log('You can download MongoDB from: https://www.mongodb.com/try/download/community');
        process.exit(1);
    }
};

connectDB();

// Register routes for animal management
const animalRoutes = require('./routes/animal');
app.use('/animals', animalRoutes);

// Define the home route that renders the index page
app.get('/', (req, res) => {
    res.render('index');
});

// Global error handler to catch and display any errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { error: err.message });
});

// Start the server on the specified port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 