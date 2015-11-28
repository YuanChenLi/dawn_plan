var ArticleSchema = require('../schemas/article'),
mongodb = require('./mongodb');

var ArticleModel = mongodb.model('Article', ArticleSchema);

module.exports = ArticleModel;