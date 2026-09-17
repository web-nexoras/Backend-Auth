const express = require("express");
const router = express.Router();

const Signup = require ('./signUp.js')
const VerifyOtp = require ('./verifyOtp.js')

router.use("/auth", Signup );
router.use("/auth", VerifyOtp );

module.exports = router;
