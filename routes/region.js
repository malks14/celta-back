const express = require("express");

const regionController = require("../controllers/region");

const router = express.Router();

// /api/regions => GET
router.get("/regions", regionController.getRegions);

module.exports = router;
