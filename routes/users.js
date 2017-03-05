var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({"respond with a resource":  "sdd", "proxy": "http://localhost:3001/",});
});

module.exports = router;
