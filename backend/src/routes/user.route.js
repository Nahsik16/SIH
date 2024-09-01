const { check } = require("express-validator");
const {checkAuth}=require("../middleware/checkAuth");
const { register, login } = require("../controllers/auth");
const { registerValidations, loginValidation } = require("../validation/auth");
const router = require("express").Router();

router.post("/newuser", registerValidations, register);
router.post("/login",loginValidation,login);

module.exports = router;
