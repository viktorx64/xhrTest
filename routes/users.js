var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/*
What does this even do?
do this file even matter?
router.get('/getme',function(req, res, next) {
  filePath=path.resolve("./public/data", "verboseNamesAreGettingAnnoyingNow.json");
  res.sendFile(filePath);
});
*/

module.exports = router;
