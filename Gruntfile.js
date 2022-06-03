module.exports = (grunt)=>{
	
	grunt.initConfig({
		concat:{
			dist: {
				src: [
					'node_modules/bootstrap/dist/js/bootstrap.js',
					'node_modules/vue/dist/vue.global.js',
					'public/javascripts/vue-app.js'
				],
				dest: 'public/javascripts/main.js'
			}
		},
		watch: {
			scripts: {
				files: ['public/javascripts/vue-app.js'],
				tasks: ['concat']
			}
		},
		sass: {                     
			dist: {                        
		  		options: {                      
					style: 'expanded'
		  		},
		  		files: {                         
					'public/stylesheets/style.css': 'sass/main.scss'
		  		}
		    }
	  	}
	});
	
	grunt.loadNpmTasks('grunt-contrib-sass')
	grunt.loadNpmTasks('grunt-contrib-concat')
	grunt.loadNpmTasks('grunt-contrib-watch');

}
