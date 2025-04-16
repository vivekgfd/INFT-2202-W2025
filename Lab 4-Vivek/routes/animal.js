/**
 * File: routes/animal.js
 * Author: Vivekkumar Panjabi
 * Student ID: 100950706
 * Date: April 16, 2024
 * Description: Routes for animal management operations
 */

const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// Retrieve all animals from the database
router.get('/', animalController.getAllAnimals);

// Display the form for creating a new animal
router.get('/new', animalController.getAnimalForm);

// Process the form submission to create a new animal
router.post('/', animalController.createAnimal);

// Display the form for editing an existing animal
router.get('/:id/edit', animalController.getEditForm);

// Process the form submission to update an existing animal
router.put('/:id', animalController.updateAnimal);

// Remove an animal from the database
router.delete('/:id', animalController.deleteAnimal);

module.exports = router; 