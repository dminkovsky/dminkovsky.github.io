/* jshint node: true */

module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    banner: '/* http://dminkovsky.github.io */\n',

    recess: {
      options: { compile: true, banner: '<%= banner %>' },
      css: {
        src: [
          'sass/sprites.css',
          'bootstrap/less/bootstrap.less'
        ],
        dest: 'css/<%= pkg.name %>.css'
      },
      css_min: {
        options: { compress: true },
        src: [
          'sass/sprites.css',
          'bootstrap/less/bootstrap.less'
        ],
        dest: 'css/<%= pkg.name %>.min.css'
      },
    },
 
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      bootstrap: {
        src: [
        ],
        dest: '../js/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>',
        report: 'min'
      },
      bootstrap: {
        src: ['<%= concat.bootstrap.dest %>'],
        dest: '../js/<%= pkg.name %>.min.js'
      }
    },

    watch: {
      recess: {
        files: 'bootstrap/less/*.less',
        tasks: ['recess']
      }
    }
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat', 'uglify']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['recess']);

  // Full distribution task.
  grunt.registerTask('dist', ['dist-css', 'dist-js']);

  // Default task.
  grunt.registerTask('default', ['dist']);
};
