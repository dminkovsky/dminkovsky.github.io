define(['underscore', 'bower_components/backbone-amd/backbone'], function(_, Backbone) {
  _.extend(Backbone.View.prototype, {
      empty: function() {
        this.$el.empty()
        return this
      }
    , append: function(view) {
        this.$el.append(view.$el)
        return this
      } 
    , fillWith: function(view) {
        this.empty().append(view)
      }
    , childViews: {}
    , addChildView: function(data, type) {
        var app = require('app')
          , ChildView = app.views[type]
          , ChildModel = app.models[type]
          , childModel = new ChildModel(data)
        
        return (this.childViews[type] = new ChildView({
            parent: this
          , model: childModel
        })) 
      }
    , addChildViews: function(data) {
        _.each(data, this.makeChildView, this)
      }
  })
  

  Backbone.Type = function(options) {
    this.parent = options.parent || null
    this.model = options.model || new Backbone.Model
    this.view = options.view || new Backbone.View
    this.listenTo(this.model, 'change', this.view.render)
    this.initialize.apply(this, arguments) 
    this.view.render()
    if (this.parent) this.parent.fillWith(this)
  }

  _.extend(Backbone.Type.prototype, Backbone.Events, {
      initialize: function() {}
    , children: {}
    , addChild: function() {}
  })


  Backbone.Type.extend = Backbone.Model.extend

  return Backbone
})
