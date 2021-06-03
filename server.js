//Importing packages into our file
//Import name from package name, is the same like const name = require('package name')
import express from "express";
import bodyParser from "body-parser";
import routes from "./src/routes";
import domainRoute from "./src/routes/allDomains";
import tlsRoute from "./src/routes/tls";


//To be able to use variables in .env file - without it it will be undefined 
require("dotenv").config();

//Initializing the server
const app = express();

//The message from VSC it's just for the server, not depreceated
app.use(bodyParser.json()); // parse the json 
app.use(bodyParser.urlencoded({ extended: true }));

// //Giving the server access to routes
// app.use(routes);

const port = process.env.PORT || 8000; // PORT it's the name of the variable in .env
app.listen({ port }, () => {
    console.log(`Server ready at ${port}`)
})

//Giving the server access to server
app.use(routes);
app.use("/domain", domainRoute);
app.use("", tlsRoute);



