const express = require('express');
const router =express.Router();

router.get('/test', (req,res) => res.join({msg: 'Users works!'}));

module.exports = router;