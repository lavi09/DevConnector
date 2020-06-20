const express = require('express');
//importing express
const mongoose = require('mongoose');
//library that talk to mongodb
const bodyparser = require('body-parser');
const passport = require('passport');
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

const app=express();
//creating instance of express

//Body parser configuaration
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//Passport configuration
app.use(passport.initialize());
require('./config/passport')(passport);

 //db config
 const db= require('./config/keys').mongoURI;

 //Connect to mongodb
 mongoose
 .connect(db)
 .then(() => console.log('Mongodb connected'))
 //if call succeed ,no parameter coming, display db connected.
 //promise statements
 .catch(err => console.log(err));
 //if call throw error


//first route
app.get('/', (req,res)=> res.send('Hello') );
// every route will have request and respond

//Use routes
app.use('/api/users', users );
app.use('/api/profile', profile );
app.use('/api/posts', posts );

const port = 8000;
app.listen(port, () => console.log(`server running on port ${port}`))

//Asynchronous process i.e server running on port displayed first in output and then only db connected displayed.
//In js, arrow statement always executed in separate thread.