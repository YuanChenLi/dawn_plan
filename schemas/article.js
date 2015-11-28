var monogoose = require('mongoose')

var schema = {
    title: String,
    content: String,
    createTime: {
        type: Date,
        default: Date.now()
    },
    updateTime: {
        type: Date,
        default: Date.now()
    },
    imgUrl: String
};

var ArticleSchema = new monogoose.Schema(schema);

ArticleSchema.pre('save', function(next){
	if (this.isNew) {
		this.updateTime = this.createTime = Date.now();
	}else{
		this.updateTime = Date.now();
	}
	next();
})

ArticleSchema.statics = {
	fetch: function(cb){
		return this
		.find({})
		.sort('updateTime')
		.exec(cb)
	},
	findById: function(id, cb){
		return this
		.findOne({_id: id})
		.exec(cb)
	}
}

module.exports = ArticleSchema