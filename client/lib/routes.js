FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('layout', { main: 'articles' })
  }
})

FlowRouter.route('/articles', {
  name: 'articles',
  action: function() {
    BlazeLayout.render('layout', { main: 'articles' })
  }
})

FlowRouter.route('/articles/:articleId', {
  name: 'article',
  triggersEnter: [function(context) {
    Session.set('articleId', context.params.articleId)
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('layout', { main: 'article' })
  }
})