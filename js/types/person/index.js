define(['underscore', 'backbone'], function(_, Backbone) {
  var PersonView = Backbone.View.extend({
      className: 'person'
    , initialize: function(options) {
        var createElement = document.createElement
        this.$name = $(createElement('h1')).attr('class', 'name')
        this.$description = $(createElement('h2')).attr('class', 'description')
        this.$email = $(createElement('h2'))
        this.$el.append(this.$name)
          .append(this.$description)
      }
    , render: function() {
        this.$name.text(this.model.get('name'))
        this.$description.text(this.model.get('description'))
      }
  })

  require(['./NameView', './DescriptionView', './EmailView'], function(NameView
                                                                     , DescriptionView
                                                                     , EmailView) {
    _.extend(PersonView, {
        NameView: NameView
      , DescriptionView: DescriptionView
      , EmailView: EmailView
    })
  })


  return PersonView
})
