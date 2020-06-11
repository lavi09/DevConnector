const express = require('express');
const router =express.Router();
const User = require('../../models/User');


// @route  POST api/users/register
// @desc   Register user
// @access Public 
router.post('/register', (req, res) => {
  User.findOne({email: req.body.email}) //select * from Users where email= user.email
  .then(user => {
    if(user){    
    return res.status(400).json({email: 'Email Already Exists'});
  }else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

      });
      newUser.save()
      .then(user => res.json(user))
      .catch(err => console.log(err) );

    }
  })
  .catch(err => console.log(err));
 

})


router.get('/test', (req,res) => res.join({msg: 'Users works!'}));

module.exports = router;