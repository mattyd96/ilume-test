const router = require('express').Router();
const {
  signup,
  login,
} = require('../../controllers/userController');

router.route('/signup').post(signup);

router.route('/login').get(login);

module.exports = router;
