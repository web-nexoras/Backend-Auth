const express = require("express");
const router = express.Router();

const Signup = require ('./signUp.js')

router.use("/auth", Signup );

module.exports = router;
