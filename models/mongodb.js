var mongoose = require('mongoose');
var uri = "mongodb://localhost/NodeJS";
//var uri = "mongodb://01c2ace4-d8d5-4ece-b4f6-c5e8bc34563a:i3BBte-WCJANn_Q-yDT5-w@10.9.27.25:27017/6715d247-df7f-4dbb-9cf2-d4e163285472";
var mongoosedb = mongoose.createConnection(uri);
module.exports = mongoosedb;