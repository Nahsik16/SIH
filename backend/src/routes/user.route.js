const { register, login } = require("../controllers/user.controller");
const { registerValidations, loginValidation } = require("../validation/user.validation");
const router = require("express").Router();

router.post("/register", registerValidations, register);
router.post("/login", loginValidation, login);

module.exports = router;
