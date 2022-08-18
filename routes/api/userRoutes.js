const router = require('express').Router();
const {
  signup,
  login,
} = require('../../controllers/userController');

router.route('/signup').post(signup); // user signup

router.route('/login').post(login); // user login

module.exports = router;
