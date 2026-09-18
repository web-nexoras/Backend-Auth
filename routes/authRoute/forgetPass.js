const express = require("express");
const router = express.Router();


const { authMiddleware } = require("../../middlewares/authMiddleware");
const { forgotPassword } = require("../../controllers/auth/forgetPass");

router.get('/forget-password', authMiddleware, forgotPassword );

module.exports = router;