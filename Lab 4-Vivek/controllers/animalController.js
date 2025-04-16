/**
 * Wildlife Sanctuary Management System
 * Author: Vivekkumar Panjabi
 * Student ID: 100950706
 * Date: April 16, 2024
 * 
 * This module implements the MVC Controller for wildlife management.
 * Implementation follows REST principles and MongoDB best practices.
 * 
 * References:
 * - IUCN Red List of Threatened Species
 * - Wildlife Conservation Society Guidelines
 * - CITES (Convention on International Trade in Endangered Species)
 */

const Animal = require('../models/Animal');

/**
 * Sample dataset for initial population
 * Data curated from various conservation sources:
 * - IUCN Red List
 * - Wildlife Conservation Society
 * - CITES Appendices
 */
const sampleAnimals = [
    {
        name: "Thunder",
        species: "Snow Leopard (Panthera uncia)",
        age: 4,
        description: "A rare high-altitude predator from the Himalayas, known for its exceptional camouflage and elusive nature. Part of our snow leopard conservation program, helping researchers understand their behavior in changing climate conditions. Exhibits unique vocalizations and marking behaviors."
    },
    {
        name: "Blaze",
        species: "Komodo Dragon (Varanus komodoensis)",
        age: 8,
        description: "The world's largest living lizard, native to Indonesian islands. Participates in our reptile conservation research, helping scientists study their unique venom delivery system. Known for its impressive size and complex social behaviors."
    },
    {
        name: "Storm",
        species: "Philippine Eagle (Pithecophaga jefferyi)",
        age: 3,
        description: "One of the world's rarest and most powerful birds of prey. Part of our avian conservation program, helping restore populations in their native habitat. Demonstrates exceptional hunting skills and complex mating rituals."
    },
    {
        name: "Frost",
        species: "Black Rhinoceros (Diceros bicornis)",
        age: 12,
        description: "A critically endangered species from African savannas. Participates in our anti-poaching research program, helping develop new conservation strategies. Known for its distinctive hooked lip and territorial behaviors."
    },
    {
        name: "Shadow",
        species: "Vaquita (Phocoena sinus)",
        age: 2,
        description: "The world's most endangered marine mammal, native to the Gulf of California. Part of our marine conservation initiative, helping scientists understand their unique echolocation patterns. Known for its distinctive facial markings and shy nature."
    }
];

/**
 * Creates initial sample data if the database is empty
 * @async
 * @function createSampleAnimals
 * @returns {Promise<void>}
 */
const createSampleAnimals = async () => {
    try {
        const count = await Animal.countDocuments();
        if (count === 0) {
            await Animal.insertMany(sampleAnimals);
            console.log('Sample animals created successfully');
        }
    } catch (error) {
        console.error('Error creating sample animals:', error);
    }
};

/**
 * Retrieves all animals and renders them in the view
 * @async
 * @function getAllAnimals
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.getAllAnimals = async (req, res) => {
    try {
        await createSampleAnimals();
        const animals = await Animal.find().sort({ createdAt: -1 });
        res.render('animals/all-animals', { animals });
    } catch (error) {
        res.status(500).render('error', { error: 'Error fetching animals' });
    }
};

/**
 * Renders the animal entry form
 * @function getAnimalForm
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.getAnimalForm = (req, res) => {
    res.render('animals/entry-form');
};

/**
 * Creates a new animal record
 * @async
 * @function createAnimal
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.createAnimal = async (req, res) => {
    try {
        const animal = new Animal(req.body);
        await animal.save();
        res.redirect('/animals');
    } catch (error) {
        res.status(400).render('animals/entry-form', { error: 'Error creating animal' });
    }
};

/**
 * Retrieves and renders the edit form for an animal
 * @async
 * @function getEditForm
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.getEditForm = async (req, res) => {
    try {
        const animal = await Animal.findById(req.params.id);
        if (!animal) {
            return res.status(404).render('error', { error: 'Animal not found' });
        }
        res.render('animals/edit-animal', { animal });
    } catch (error) {
        res.status(500).render('error', { error: 'Error fetching animal' });
    }
};

/**
 * Updates an existing animal record
 * @async
 * @function updateAnimal
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.updateAnimal = async (req, res) => {
    try {
        const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!animal) {
            return res.status(404).render('error', { error: 'Animal not found' });
        }
        res.redirect('/animals');
    } catch (error) {
        res.status(400).render('animals/edit-animal', { error: 'Error updating animal' });
    }
};

/**
 * Deletes an animal record
 * @async
 * @function deleteAnimal
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.deleteAnimal = async (req, res) => {
    try {
        const animal = await Animal.findByIdAndDelete(req.params.id);
        if (!animal) {
            return res.status(404).render('error', { error: 'Animal not found' });
        }
        res.redirect('/animals');
    } catch (error) {
        res.status(500).render('error', { error: 'Error deleting animal' });
    }
}; 