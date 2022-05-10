module.exports = (grunt)=>{
	
	grunt.initConfig({
		concat:{
			dist: {
				src: ['node_modules/bootstrap/dist/js/bootstrap.js'],
				dest: 'public/javascripts/main.js'
			}
		},
		sass: {                     
			dist: {                        
		  		options: {                      
					style: 'expanded'
		  		},
		  		files: {                         
					'public/stylesheets/style.css': 'node_modules/bootstrap/scss/bootstrap.scss'
		  		}
		    }
	  	}
	});
	
	grunt.loadNpmTasks('grunt-contrib-sass')
	grunt.loadNpmTasks('grunt-contrib-concat')
}
