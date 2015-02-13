module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodemon: {
        dev: {
            script: 'server.js'
        }
     },
    qunit: {
        all: ['specs/tests.html']
  }
});

  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.registerTask('default', ['nodemon']);
  grunt.registerTask('unit', ['qunit']);
};