var express = require('express')
  , server = express()

require('freeport')(function(error, port) {
  if (!error) {
    console.log('Running dminkovsky.github.io development server on http://localhost:%s/', port)
    serve_files(server)
      .listen(port)
    return
  }
  console.log('Failed to get a free port: %s', error)
  console.log('Cannot run dminkovsky.github.io development server.', error)
  process.exit(1)
})

function serve_files(server) {
  server.use(express.static(__dirname))
  return server
}