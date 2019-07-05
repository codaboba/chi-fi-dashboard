const router = require('express').Router();

// router.post('/foodinspection', (req, res, next) => {
//
// })

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
