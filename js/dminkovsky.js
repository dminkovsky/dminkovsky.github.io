require.config({
  baseUrl: 'js',
  paths: { jquery: 'bower_components/jquery/jquery'
    , underscore: 'bower_components/underscore-amd/underscore'
    , backbone: 'bower_components/backbone-amd/backbone'
    , oj: 'bower_components/oj/src/oj'
    , fixtures: 'fixtures'
  }
})

require(['jquery', 'underscore', 'backbone', 'oj', 'fixtures'], function($, _, Backbone, o, f) {

o.useGlobally()

$('body').oj(function() {
    div({c:'container'}, function() {

      div({c:'contact'}, function() {

        var social_service = BulletList()

        div({c:'basics'}, function() {

          h1(f.name, {c:'name'})

          h2(f.title)

          a({href:'mailto:'+f.email}, function() { h2(f.email, {c:'email'}) }) })



        ul({c:'social-services'}, function() {
          Object.keys(f['social-services']).forEach(function (service) {
            li({c:['social-service', service]}, function() {
              a({c:'icon-link', href:f['social-services'][service]['profile-url']})
              span(f['social-services'][service]['profile-url'], {c: 'profile-url'})
            }) }) })
      })

      div(f['content'], {'c':'content'})
    })
}) })

//  , mouseenter: _.debounce(function(event) {
//  console.log('Enter %s', event.target.toString())
//}, 300)
//  , mouseout: function() {
//  console.log('Leave %s', event.target.toString())
//}
//          var enter = _.debounce(function(event) {
//            $(event.target).addClass('out')
//          }, 300)
//
//          var out = _.debounce(function(event) {
//            $(event.target).removeClass('out')
//          }, 300)
//
