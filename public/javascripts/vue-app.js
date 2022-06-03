let audio = new Audio();

const app = Vue.createApp({
	data(){
		return{
			playlists: [],
			title: '',
			playlist: '',
			query: '',
			songPos: 0
		}
	},
	methods: {
		play(e){
			this.title = e.target.dataset.trackname;
			this.playlist = e.target.dataset.playlist;
			let tmpQuery = `/play/${this.playlist}/${this.title}` 
			this.query = tmpQuery.replace(/ /g, '');
			audio.src = this.query;
			audio.play();
		},
		setSongPos(e){
			console.log(e);
		},
		stop(){
			audio.pause();
		}
	},
	computed: {
		getPlaylists: function(){
			let self = this;
			
			if(this.playlists.length == 0){
				let xhr = new XMLHttpRequest();
				xhr.open('get', '/getPlaylists', true);
				xhr.send();
				xhr.onload = function(){
					self.playlists = JSON.parse(xhr.response);
					console.log(self.playlists)
				}	
			}
		}
	}
});

const mountedApp = app.mount('#app');

