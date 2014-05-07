module.exports = function ( grunt ) {
    grunt.initConfig( {
 
        nodemon: {
            all: {
                script: '.\/bin\/www',
                options: {
                    ext: 'js'
                }
            }
        }
    });
 
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('default', ['nodemon']);
  }