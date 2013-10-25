requirejs.config({
  baseUrl: 'js/bower_components',
  paths: {
      jquery: 'jquery/jquery'
    , underscore: 'underscore-amd/underscore'
    , backbone: 'backbone-amd/backbone'
    , oj: 'oj/src/oj'
  }
})

requirejs(['jquery', 'underscore', 'backbone', 'oj'], function($, _, Backbone, oj) {
  console.log($)
  console.log(_)
  console.log(Backbone)
  console.log(oj)
})
