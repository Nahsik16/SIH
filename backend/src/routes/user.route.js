const userData = require("../controllers/user.controller");
// const { registerValidations, loginValidation } = require("../validation/user.validation");
const router = require("express").Router();
const mongoose = require("mongoose");



router.post("/register", userData.register);
router.post("/login", userData.login);
router.get("/getRegisteredUsersByUsername/:username", userData.getRegisteredUsersByUsername);

module.exports = router;
