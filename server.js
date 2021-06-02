//Importing packages into our file
//Import name from package name, is the same like const name = require('package name')
import express from "express";
import bodyParser from "body-parser";


//To be able to use variables in .env file - without it it will be undefined 
require("dotenv").config();

//Initializing the server
const app = express();

//The message from VSC it's just for the server, not depreceated
app.use(bodyParser.json()); // parse the json 
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 8000; // PORT it's the name of the variable in .env
app.listen({port}, () => {
    console.log(`Server ready at ${port}`)
})

