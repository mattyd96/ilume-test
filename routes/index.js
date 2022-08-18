const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.json({message: 'Welcome, please check https://github.com/mattyd96/ilume-test for documentation on available routes'});
});

module.exports = router;