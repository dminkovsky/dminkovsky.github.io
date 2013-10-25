// An HTTP server for your local development needs!

var express = require('express')
  , server = express()

require('freeport')(function(error, port) {
  if (!error) {
    server
      .use(function(req, res, next) { console.log('%s %s', req.method, req.path); next() })
      .use(express.static(__dirname))
      .listen(port, function() { console.log('Running dminkovsky.github.io development server on http://localhost:%s/', port) })
    return
  }
  console.log('Failed to get a free port: %s', error)
  console.log('Cannot run dminkovsky.github.io development server.')
  process.exit(1)
})
