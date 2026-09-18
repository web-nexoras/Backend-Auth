const express = require("express");
const router = express.Router();

const Signup = require ('./signUp.js')
const VerifyOtp = require ('./verifyOtp.js')
const Signin = require ('./signIn.js')

router.use("/auth", Signup );
router.use("/auth", VerifyOtp );
router.use("/auth", Signin );
    
module.exports = router;
