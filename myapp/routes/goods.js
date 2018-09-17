var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

mongoose.connect('mongodb://127.0.0.1:27017/mytest');


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.url);
Goods.find({},function (err,doc) {
   if(err){
       res.json({});
   } else{
       res.json({
           status : 0,
           result : {
               count : doc.length,
               list:doc
           }
       });
   }
})
});
module.exports = router;
