var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({"username":  "admin", "password": "123"});
});

module.exports = router;
