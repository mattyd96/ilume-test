const {User} = require('../models');

module.exports = {
  //get dogs
  getDogs: async (req,res) => {
    const {id} = req.body;
    const user = await User.findById(id);

    return res.json(user.dogs);
  }
}