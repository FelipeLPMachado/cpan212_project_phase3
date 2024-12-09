const express = require('express');
const passport = require('passport');
const { register, login, getUserProfile } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', passport.authenticate('local', { session: false }), login);
router.get('/profile', passport.authenticate('jwt', { session: false }), getUserProfile);

module.exports = router;
