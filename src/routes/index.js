// Every router has each routes
import { Router } from "express";
// express.router , import router from express (considered as object)

const router = Router(); // I used router that's a function from express

//Defining a test route
//In our example : in request we will receive the name of the domain.
router.get("/test", (req, res) => {
    res.status(200).send({
        success: "true",
        message: "You have reached our neweley developed app"
    });
});

module.exports = router;