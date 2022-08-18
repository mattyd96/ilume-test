const router = require('express').Router();
const {
  getDogs,
  getDog,
  addDog,
} = require('../../controllers/dogController');

router.route('/all').get(getDogs);
router.route('/single').get(getDog);
router.route('/add').post(addDog)

module.exports = router;