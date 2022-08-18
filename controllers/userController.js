const {User} = require('../models');

module.exports = {
  async signup(req, res) {
    // create user
    // Make sure email doesn't already exist
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(404).json({ message: 'This email is already registered as a user' })
    }

    const newUser = new User({
      email: req.body.email,
      password: req.body.password
    });

    const response = await newUser.save();

    return res.json(response.id)
  },

  login: async (req, res) => {
    // login user
  }
}