const { getcount } = require("../controllers/count.controller");
const router = require("express").Router();





router.get("/", getcount);
module.exports = router;
