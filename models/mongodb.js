var mongoose = require('mongoose');
//var uri = "mongodb://localhost/NodeJS";
var uri = "mongodb://1d5599ee-7c03-433b-8f7e-12489f975211:H4ioSb4VDJNn46O9DDnY-Q@10.9.27.25:27017/6715d247-df7f-4dbb-9cf2-d4e163285472";
var mongoosedb = mongoose.createConnection(uri);
module.exports = mongoosedb;