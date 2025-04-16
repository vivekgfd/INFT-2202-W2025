/**
 * File: models/Animal.js
 * Author: Vivekkumar Panjabi
 * Student ID: 100950706
 * Date: April 16, 2024
 * Description: Mongoose schema for the Animal model
 */

const mongoose = require('mongoose');

/**
 * Schema definition for the Animal model
 * Defines the structure and validation rules for animal records
 */
const animalSchema = new mongoose.Schema({
    // Name of the animal (required)
    name: {
        type: String,
        required: true,
        trim: true
    },
    // Species classification (required)
    species: {
        type: String,
        required: true,
        trim: true
    },
    // Age of the animal in years (required, must be non-negative)
    age: {
        type: Number,
        required: true,
        min: 0
    },
    // Detailed description of the animal
    description: {
        type: String,
        trim: true
    },
    // Timestamp when the record was created
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Animal', animalSchema); 