const { register, login, getuser } = require("../controllers/user.controller");
// const { registerValidations, loginValidation } = require("../validation/user.validation");
const router = require("express").Router();
const mongoose = require("mongoose");



router.post("/register", register);
router.post("/login", login);

module.exports = router;
