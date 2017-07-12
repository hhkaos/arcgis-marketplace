module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'acetate': {
      build: {
        options: {
          mode: 'build',
          dest: 'docs',
          config: 'acetate.config.js'
        }
      },

      server: {
        options: {
          mode: 'server',
        }
      }
    },

    'watch': {
      sass: {
        files: ['src/assets/sass/**/*'],
        tasks: ['sass', 'autoprefixer']
      },
      img: {
        files: ['src/assets/img/**/*'],
        tasks: ['newer:imagemin']
      }
    },

    // Build site sass
    'sass': {
      expanded: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          'src/assets/css/main.css': 'src/assets/sass/main.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions'],
        map: true
      },
      build: {
        src: 'docs/assets/css/main.css',
        dest: 'docs/assets/css/main.css'
      }
    },

    // Optimize images
    'imagemin': {
      doc: {
        files: [{
          expand: true,
          cwd: 'src/assets/img',
          src: ['**/*.{png,jpg,svg}'],
          dest: 'docs/assets/img/'
        }]
      }
    },

    copy: {
      main: {
        files: [{
            expand: true, 
            cwd: '.', 
            src: ['build/**'], 
            dest: 'docs/', 
            rename: function(dest, src) {
              return 'docs/' + src.substring(src.indexOf('/'), src.length);
            }
          }]
        }
      },

    clean:{
      build: ['build'],
      all: ['build', 'docs']
    } 
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['clean:all', 'newer:imagemin', 'sass', 'autoprefixer', 'watch']);
  grunt.registerTask('deploy', ['clean:all', 'acetate:build', 'sass', 'autoprefixer', 'newer:imagemin', 'copy', 'clean:build']);
};