var express = require('express'),
router = express.Router(),
ArticleModel = require('../models/article');

/* GET home page. */
router.get('/', function(req, res, next) {
    ArticleModel.fetch(function(err, articles){
        if (err) {
            console.log(err)
        }
        res.render('index', {
            title: '首页',
            articles: articles
        });
    });
});

router.get('/detail/:id', function(req, res){
    var id = req.params.id
    ArticleModel.findById(id, function(err, article){
        res.render('detail', {
            title: '详情',
            article: article
        })
    })

})

router.get('/new', function(req, res){
    console.log('进入新增文章路由');
    res.render('addOrEdit', {
        title: '新增文章',
        article:{}
    });
})

router.get('/update/:id', function(req, res){
    var id = req.params.id
    if (id) {
        ArticleModel.findById(id, function(err, article){
            res.render('addOrEdit', {
                title: '更新文章',
                article: article
            })
        })
    }
})

//post
router.post('/save', function(req, res){
    var articleObj = req.body;
    var _article;
    console.log("en:"+articleObj.id);
    if (articleObj.id) {
        ArticleModel.findById(articleObj.id, function(err, article){
            if (err) {
                console.log(err)
            };
            article.title = articleObj.title;
            article.content = articleObj.content;
            article.imgUrl = articleObj.imgUrl;
            article.save(function(err, article){
                if (err) {
                    console.log(err)
                };
                res.redirect('/detail/'+ article._id)
            })
        })
    }else{
        console.log("here");
        _article = new ArticleModel({
            title: articleObj.title,
            content: articleObj.content,
            imgUrl: articleObj.imgUrl
        })
        _article.save(function(err, article){
            if (err) {
                console.log(err);
            };
            res.redirect('/detail/'+ article._id);
        })
    }
})

router.delete('/article/:id', function(req, res){
    var id = req.body.id;
    if(id){
        ArticleModel.delete(id, function(err, article){
            if (err) {
                console.log(err)
            };
            res.send({code: 1, msg: '删除成功'});
        });
    }
})

module.exports = router;
