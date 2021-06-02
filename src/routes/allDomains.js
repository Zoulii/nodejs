const router = require("express-promise-router")();
// Express promise router 
//is an other package used for resolving quires from db
// takes the request of the server, makes a query to a db, then gives the feedback 
const domainController = require("../controllers/domain.controller");

router.get("/domains", domainController.allDomains)

module.exports = router;
