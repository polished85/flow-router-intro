#Flow Router Intro: Part I

##Get Started 
```
git clone https://github.com/polished85/flow-router-intro
```

##Dependencies
fourseven:scss
kadira:flow-router
kadira:blaze-layout

##Project Structure
A component based structure gives the developer a clear high level overview of the app, and makes it easier to map routes to a component.

/ app  

----- / both  
---------- / models  
--------------- / articles.js  

----- / client  
---------- / layout.html  
---------- / subscriptions.html  
---------- / components  
--------------- / header  
-------------------- / header.html  
-------------------- / events.js  
-------------------- / helpers.js  
-------------------- / styles.scss  
--------------- / articles  
-------------------- / articles.html  
-------------------- / events.js  
-------------------- / helpers.js  
-------------------- / styles.scss  
--------------- / article  
-------------------- / article.html  
-------------------- / events.js  
-------------------- / helpers.js  
-------------------- / styles.scss  
---------- / lib  
--------------- / routes.js  
--------------- / scss  
-------------------- / app.scss  
-------------------- / bootstrap4  
-------------------- / components  

----- / public  
---------- / img  
---------- / fonts  

----- / server
---------- / methods.js
---------- / publications.js
---------- / startup.js

### Component
A component is composed of 4 things, with only the template being required
1. a template
2. helpers
3. events
4. styles

### Routing
Routing is essentially a list of URL defenitions that map to a component/template. e.g. If route is "/articles", render the template named "articles". Under the hood, client side routing is achieved using the HTML5 History API.
This concept is very simple, and writing this route with Flow Router would look like this:
```
FlowRouter.route('/articles', {
  action: function() {
    BlazeLayout.render('layout', { main: 'articles' })
  }
})
```

### Routing With Parameters
Routing with parameters adds a small layer of complexity as it introduces the Meteor concept of Session variables.
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
