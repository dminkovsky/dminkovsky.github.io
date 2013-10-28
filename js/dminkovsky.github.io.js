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
    , SocialProfileView = Backbone.View.extend({tagName: 'li'})
    , socialProfiles

  socialProfiles = new SocialProfiles()
  $('.person .social .urls .url').each(function(url){
    var socialProfile, socialProfileView
    socialProfile = new SocialProfile()
    socialProfileView = new SocialProfileView({
        el: this
      , model: socialProfile
      , events: {
            mouseenter: function() {
              this.$el.addClass('out')
            }
        }
    })
    socialProfiles.add(socialProfile)
  }) 
})
