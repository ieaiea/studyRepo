const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('user', {title : 'user page'});
});

module.exports = router;