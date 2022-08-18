const {User} = require('../models');

module.exports = {
  // signup new user
  signup: async (req, res) => {
    const {email, password} = req.body;

    // Make sure email doesn't already exist
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'This email is already registered as a user' })
    }

    // create new user
    const newUser = new User({
      email,
      password
    });

    //save user
    const response = await newUser.save();

    // return id -> could be a JWT or session token
    return res.json(response.id)
  },

  // login an existing user
  login: async (req, res) => {
    const {email, password} = req.body;

    // find user with email
    const user = await User.findOne({ email });

    // if no user -> error
    if(!user) {
      return res.status(400).json({ message: 'Incorrect credentials' })
    }

    const match = await user.validatePassword(password);

    // if password doesn't match -> error
    if (!match) {
      return res.status(400).json({ message: 'Incorrect credentials' })
    }

    // return id -> could be a JWT or session token
    return res.json(user.id)
  }
}