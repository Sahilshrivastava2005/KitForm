const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  googleOauth
} = require("../controller/authController");
const { protect } = require('../middlewares/protect');
const passport = require('passport');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/profile', protect,getUserProfile);
router.get('/google', passport.authenticate("google", { scope: ["profile", "email"] }));
router.get('/google/callback',
  passport.authenticate("google", { failureRedirect: "/login" }),
  googleOauth // your controller function after successful login
);
module.exports = router;
