const questions = require('../data/questions.json');

const express = require('express');
const router = express.Router();


// TODO: Add routes
router.get('/greeting', (req, res) => {
    res.json({
        greeting: "Hello, World!"
    });
})

router.get('/questions', (req, res) => {
    res.json(questions);
})

module.exports = router;