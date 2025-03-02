const express = require("express");

const {
  register,
  login,
  getMe,
  logout,
  requestPasswordReset,
  resetPassword,
} = require("../controllers/auth");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);
router.get("/logout", logout);

router.post("/reset-password-request", requestPasswordReset);
router.post("/reset-password", resetPassword);

module.exports = router;
