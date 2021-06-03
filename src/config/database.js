import { Pool } from "pg";

// Function from postgre , finding new pool of DB, connexion between our application and this DB

require("dotenv").config();
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

//Console.log a successful DB connection msg
pool.on("connect", () => {
    console.log("Connection with the DB has been etablished");
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};

//Query is an object