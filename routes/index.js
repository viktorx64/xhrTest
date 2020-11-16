var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getme',function(req, res, next) {
  filePath=path.resolve("./public/data", "verboseNamesAreGettingAnnoyingNow.json");
  res.sendFile(filePath);
});


module.exports = router;
