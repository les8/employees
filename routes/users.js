const express = require("express");
const router = express.Router();
const { login, register, current } = require("../controllers/users");
const { auth } = require("../middleware/auth");

router.post("/login", login);

router.post("/register", register);

/**
 * @route GET api/user/current
 * @desc текущий пользователь
 * @access privat
 */
router.get("/current", auth, current);

module.exports = router;
