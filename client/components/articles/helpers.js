Template.articles.helpers({

	articles: function(){
		var articles = Articles.find({}).fetch()
		return articles
	}

})