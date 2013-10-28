define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  var App
    , AppView
    , AppModel

  AppModel = Backbone.Model.extend({})

  AppView = Backbone.View.extend({
      className: 'app container'
    , initialize: function(options) {
        this.makeChildViews(this.model.attributes)
      }
  })

  App = Backbone.Type.extend({
      initialize: function(options) {
      }
  }, { Model: AppModel, View: AppView })

  return App
})
