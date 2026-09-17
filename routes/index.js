const express = require("express");
const router = express.Router();

const baseUrl = process.env.BASE_URL;
const authRoutes = require("./auth_route");

router.use(baseUrl, authRoutes);

module.exports = router;