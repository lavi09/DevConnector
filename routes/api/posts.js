const express = require('express');
const router =express.Router();

router.get('/test', (req,res) => res.join({msg: 'Posts works!'}));

module.exports= router;