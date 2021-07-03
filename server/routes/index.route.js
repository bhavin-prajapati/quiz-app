const express = require('express');
const router = express.Router();


// TODO: Add routes
router.get('/greeting', (req, res) => {
    res.json({
        greeting: "Hello, World!"
    });
})

module.exports = router;