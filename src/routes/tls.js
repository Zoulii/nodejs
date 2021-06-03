import { Router } from "express";

const router = Router();
const tlsController = require("../controllers/tls.controller");



router.get("/tls", tlsController.tls)

module.exports = router;

