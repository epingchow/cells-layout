module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      options: {
        report: 'gzip'
      },
      combine: {
        files: {
          'dist/css/cells.min.css': 'dist/css/cells.css',
        }
      }
    },
    
    recess: {
      options: {
        compile: true,
        banner: '<%= banner %>'
      },
      cells: {
        src: ['less/cells.less'],
        dest: 'dist/css/cells.css'
      }
    },
	clean: {
      dist: ['dist']
    },
    watch: {
      cells: {
        files: ['less/*.less'],
        tasks: ['recess', 'cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-recess');

  grunt.registerTask('default', ['clean', 'recess', 'cssmin']);
};