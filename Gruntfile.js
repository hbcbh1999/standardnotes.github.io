module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      haml: {
        files: ['templates/*.haml'],
        tasks: ['newer:haml'],
        options: {
          spawn: false,
        },
      },

      js: {
        files: ['avascripts/**/*.js'],
        tasks: ['concat'],
        options: {
          spawn: false,
        },
      },

      css: {
        files: ['stylesheets/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      }
    },

    sass: {
      dist: {
        options: {
         style: 'expanded'
       },
        files: {
          'vendor/stylesheets/main.css': 'stylesheets/main.css.scss'
        }
      }
    },

    haml: {
      dist: {
        expand: true,
        ext: '.html',
        extDot: 'last',
        src: ['templates/**/*.haml'],
        dest: '',
        rename: function (dest, src) {
          return dest + src.replace("templates/", "").replace(".html", "");
        }
      },
    },
  });

  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-haml2html');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['haml', 'sass']);
};
