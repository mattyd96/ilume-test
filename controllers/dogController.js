const {User} = require('../models');

module.exports = {
  //get dogs
  getDogs: async (req,res) => {
    const {id} = req.body;
    const user = await User.findById(id);

    return res.json(user.dogs);
  },

  //get a single dog
  getDog: async (req,res) => {
    const {userId, dogId} = req.body;
    const user = await User.findById(userId);

    const dog = user.dogs.id(dogId);

    return res.json(dog);
  },

  //add dog
  addDog: async (req, res) => {
    const {userId, name, dob, breed} = req.body;
    let user = await User.findById(userId);
    
    const newDog = {name, dob, breed};
    user.dogs.push(newDog);
    user = await user.save();

    return res.status(200).json(user.dogs)
  }
}