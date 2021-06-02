//Importing packages into our file
//Import name from package name, is the same like const name = require('package name')
import express from "express";
import bodyParser from "body-parser";


//To be able to use variables in .env file - without it it will be undefined 
require(".env").config();

//Initializing the server
const app = express();
