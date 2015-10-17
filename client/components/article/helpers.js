Template.article.helpers({

	article: function(){
		var articleId = Session.get('articleId')
		var article = Articles.findOne({ _id: articleId })
		return article
	}

})