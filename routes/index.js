var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fitness Base' });
});

router.get('/store', function(req, res, next) {
  res.render('store', { title: 'Fitness Store' });
});

router.get('/tdee', function(req, res, next) {
  res.render('tdee', { title: 'Fitness TDEE' });
});

module.exports = router;
