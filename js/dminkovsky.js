require.config({
  baseUrl: 'js',
  paths: {
      jquery: 'bower_components/jquery/jquery'
    , underscore: 'bower_components/underscore-amd/underscore'
    , backbone: 'bower_components/backbone-amd/backbone'
    , oj: 'bower_components/oj/src/oj'
    , fixtures: 'fixtures'
  }
})

require(['jquery', 'underscore', 'backbone', 'oj', 'fixtures'], function($, _, Backbone, oj, fixtures) {
  $('body').oj(function() {
    oj.div({ c: ['container'] }, function() {
      oj.h1(fixtures.name)

      oj.ul({ c: ['social-links'] }, function() {
        var social

        function social_item(key) {
          oj.li('', { c: ['social-link', key] }, function() {
            oj.a({href: social[key].url }, function() { oj.span(social[key].label) })
          })
        }

        social = fixtures.social
        Object.keys(social).forEach(social_item)
      })
    })
  })
})
