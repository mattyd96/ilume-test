const {User} = require('../models');

// list of valid breeds -> if this gets too long consider moving into it's own file
const VALID_BREEDS = [
  "Cavoodle",
  "Labrador",
  "Pug"
]

const checkBreed = breed => {
  return VALID_BREEDS.includes(breed);
};

module.exports = {
  // get dogs
  getDogs: async (req,res) => {
    const {id} = req.body;
    const user = await User.findById(id);

    // if no user -> error
    if(!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    return res.json(user.dogs);
  },

  // get a single dog
  getDog: async (req,res) => {
    const {userId, dogId} = req.body;
    const user = await User.findById(userId);

    // if no user -> error
    if(!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const dog = user.dogs.id(dogId);

    // if no dog-> error
    if(!dog) {
      return res.status(400).json({ message: 'Dog not found' });
    }

    return res.status(200).json(dog);
  },

  // add dog
  addDog: async (req, res) => {
    const {userId, name, dob, breed} = req.body;
    let user = await User.findById(userId);

    // if no user -> error
    if(!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    
    // if breed is valid, add the dog
    if(checkBreed(breed)) {
      const newDog = {name, dob, breed};
      user.dogs.push(newDog);
      user = await user.save();
    } else {
      return res.status(400).json({ message: 'invalid breed' });
    }

    return res.status(200).json(user.dogs);
  },

  // update dog -> still needs input checking
  updateDog: async (req, res) => {
    const {userId, dogId, name, dob, breed} = req.body;
    let user = await User.findById(userId);

    // if no user -> error
    if(!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // check for valid breed input
    if(!checkBreed(breed)) {
      return res.status(400).json({ message: 'invalid breed' });
    }
    
    // if dog exists, update it
    if(user.dogs.id(dogId)) {
      user.dogs.id(dogId).name = name;
      user.dogs.id(dogId).dob = dob;
      user.dogs.id(dogId).breed = breed;
      user = await user.save();
    } else {
      return res.status(400).json({ message: 'Dog not found' });
    }

    return res.status(200).json(user.dogs);
  },

  // delete dog
  deleteDog: async (req, res) => {
    const {userId, dogId} = req.body;
    let user = await User.findById(userId);

    // if no user -> error
    if(!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    user.dogs = user.dogs.filter(dog => dog.id != dogId);
    user = await user.save();

    return res.status(200).json(user.dogs);
  }
}