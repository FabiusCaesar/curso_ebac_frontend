module.exports = function(grunt) {
    // Configuração do Grunt
    grunt.initConfig ({
        pkg: grunt.file.readJSON('package.json'),

        // Configuração do Less
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    // Carregar os plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Tarefas
    grunt.registerTask('default', ['less', 'uglify']);
}