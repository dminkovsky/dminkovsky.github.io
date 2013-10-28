define(['underscore', 'backbone'], function(_, Backbone) {
  return Backbone.View.extend({
      tagName: 'h2'
    , className: 'description'
    , render: function() {
        this.$el.text(this.model.get('description'))
      }
  })
})
