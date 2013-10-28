require.config({
    baseUrl: 'js'
  , paths: {
        jquery: 'bower_components/jquery/jquery'
      , underscore: 'bower_components/underscore-amd/underscore'
      , backbone: 'bower_components/backbone-amd/backbone'
    }
})

require(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  var SocialProfiles = Backbone.Collection.extend()
    , SocialProfile = Backbone.Model.extend()
    , SocialProfileView = Backbone.View.extend({
          tagName: 'li'
        , initialize: function(options) {
          }
        , go: function(event) {
            event.stopPropagation()
            window.location = this.$('a').attr('href')
          }
        , make_out: function() {
            this.$el.addClass('out')
          }
        , make_in: function() {
            this.$el.removeClass('out')
          }
      })
    , socialProfiles

  socialProfiles = new SocialProfiles()
  $('.person .social .urls .url').each(function(url){
    var socialProfile, socialProfileView
    socialProfile = new SocialProfile()
    socialProfileView = new SocialProfileView({
        el: this
      , model: socialProfile
      , events: {
            'mouseenter': 'make_out'
          , 'mouseleave': 'make_in'
          , 'click': 'go'
        }
    })
    socialProfiles.add(socialProfile)
  }) 
})
