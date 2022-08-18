const router = require('express').Router();
const {
  getDogs,
  getDog,
  addDog,
  updateDog,
  deleteDog
} = require('../../controllers/dogController');

router.route('/all').get(getDogs); // get all dogs
router.route('/single').get(getDog); // get a single dog by id
router.route('/add').post(addDog); // add a dog
router.route('/add').put(updateDog); // update a dog
router.route('/delete').delete(deleteDog); // delete a dog

module.exports = router;