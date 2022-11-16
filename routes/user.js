const express = require("express");

const userController = require("../controllers/user");
const { body } = require("express-validator");

const router = express.Router();

// /user/add-user => POST
router.post(
  "/add-user",
  [
    body("name").isString().isLength({ min: 3 }).trim(),
    body("lName").isString().isLength({ min: 3 }),
    body("password").isString().isLength({ min: 6 }).trim(),
  ],
  userController.postAddUser
);

module.exports = router;
