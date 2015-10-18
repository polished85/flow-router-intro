#Flow Router Intro: Part I

##Get Started 
```
git clone git@github.com:polished85/flow-router-intro.git
```

##Dependencies
* [fourseven:scss](https://atmospherejs.com/fourseven/scss)
* [kadira:flow-router](https://atmospherejs.com/kadira/flow-router)
* [kadira:blaze-layout](https://atmospherejs.com/kadira/blaze-layout)

##Project Structure
A component based structure gives the developer a clear high level overview of the app, and makes it easier to map routes to a component.

### Component
A component is composed of 4 things, with only the template being required
* a template
* helpers
* events
* styles

### Routing
Routing is essentially a list of URL defenitions that map to a component. The component is identified by its template name. Flow Router lets us define 2 types of routes, static and dynamic. Under the hood, client side routing is achieved using the HTML5 History API. 

#### Static Routes
Static routes are very straightforward and do not contain parameters. e.g. If route is "/articles", render the template named "articles". With Flow Router, this route would look like this:
```
FlowRouter.route('/articles', {
  action: function() {
    BlazeLayout.render('layout', { main: 'articles' })
  }
})
```

### Dynamic Routes
Dynamic Routes allow us to pass parameters into the URL. In a route definition, parameters are identified by a colon ":". e.g. If our route definition is "/articles/:articleId", and our route is "/articles/123", the "articleId" parameter is "123".  

A popular patten in Meteor is to pass a mongo document's ID as a parameter. In our article example, this would identify which article in the DB we want to render. The following route defenition shows how we would render an individual article.
```
FlowRouter.route('/articles/:articleId', {
  triggersEnter: [function(context) {
    Session.set('articleId', context.params.articleId)
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('layout', { main: 'article' })
  }
})
```

Some of you may have noticed that this assumes we know the ID of the article we want to render. Before we explain how to we know this ID, lets use the mongo shell to grab an article ID and test the route.

Open a new terminal, cd to our project root, and type: 
```
meteor mongo
db.articles.find({}).pretty()
```
### Rendering the article
Rendering the article introduces the concept of Meteor sessions. In a nutshell, we can store temporarily variables that we can access from anywhere in our app.

The article template renders an article by first grabbing an article Id from the session variable "articleId".
```
Session.get('articleId')
```
In otherwords, the article template will always render the article which matches the ID saved in the session variable.
All we need to do to update our article component is update the articleId session variable.

To test this, grab another articleId from the mongo shell, and update the Session variable:
```
Meteor.set('articleId', 'new_article_id')
```
All right then, now we know how to update the article view, and some of you may see where this is going. Inside the route definition, we can update the session variable before the route renders the component. This can be accomplished using one of the many hooks Flow Router gives us. in this case, we will be using the "triggersEnter" hook, which allows us to run some code before the new component is rendered. Lets look at this route definition again:

```
FlowRouter.route('/articles/:articleId', {
  triggersEnter: [function(context) {
    Session.set('articleId', context.params.articleId)
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('layout', { main: 'article' })
  }
})
```

Inside the "triggersEnter" hook,  we grab the parameter (which is the article Id), and set it as the session value. When the article component renders, it will grab this session value and use that to render the article.

### How can we know the articles Id in advance?
This is much simpler than it sounds. Take a look at the articles template and find the "href" of the only anchor/link. Since we have access to each articles properties, we simply use the _id property to form part of the url. Try clicking on any of the articles "read more" links.
