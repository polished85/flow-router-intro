 Meteor.methods({

	getArticle: function(id) {
		var article = Articles.findOne({ _id: id })
		console.log(article)
		return article
  }

})