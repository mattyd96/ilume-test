const router = require('express').Router();
const {
  getDogs,
} = require('../../controllers/dogController');

router.route('/all').get(getDogs);

module.exports = router;