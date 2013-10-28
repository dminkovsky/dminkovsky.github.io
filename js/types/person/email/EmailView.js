define(['underscore', 'backbone'], function(_, Backbone) {
  return Backbone.View.extend({
      tagName: 'h1'
    , className: 'name'
    , render: function() {
        this.$el.text(this.model.get('name'))
      }
  })
})
