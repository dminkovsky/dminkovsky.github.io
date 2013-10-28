require.config({
    baseUrl: 'js'
  , paths: {
        jquery: 'bower_components/jquery/jquery'
      , underscore: 'bower_components/underscore-amd/underscore'
      , backbone: 'backbone'
      , data: 'data' 
    }
  , packages: [
        { name: 'types', main: 'index' }
      , { name: 'types/app', main: 'index' }
    ]
})

require(['jquery', 'backbone', 'types/app', 'data'], function($, Backbone, App, data) {
  (function go() {
    var BodyView = Backbone.View.extend({el: $('body')[0]})
      , root
    
    root = new Backbone.Type({
        parent: null
      , view: new BodyView
    })

    app = new App({
        parent: root
      , model: new (App.Model) 
      , view: new (App.View) 
    })
  })()
})
