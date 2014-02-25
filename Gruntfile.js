module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  var assets = 'dist/';

  grunt.initConfig({
    cssmin: {
      minify: {
        src: ['css/*.css', '!*.min.css'],
        dest: assets + 'styles.min.css'
      }
    }
  });

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['cssmin']);
}