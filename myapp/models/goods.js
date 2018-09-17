var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var produtSchema = new Schema({
    "_id":String,
    "name":String
});

module.exports = mongoose.model('good',produtSchema);