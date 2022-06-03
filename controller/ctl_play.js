let fs = require('fs');
let path = require('path');
let util = require('util');
let getFileStats = util.promisify(fs.stat);

module.exports = async (req, res)=>{
	let playlist = req.params.playlist;
	let title = req.params.title;
	let user = req.session.user.email;
	let pathToSong = path.join(__dirname, `../users/${user}/${playlist}/${title}.mp3`);
	let {size} = await getFileStats(pathToSong);
	let range = req.headers.range;

	if(range){
		let [start, end] = range.replace(/bytes=/, '').split('-');
		start = parseInt(start, 10);
		end = end ? parseInt(end, 10) : size-1;

		res.writeHead(206, {
			'Content-Range': `bytes ${start}-${end}/${size}`,
			'Accept-Ranges': 'bytes',
			'Content-Length': (end-start)+1,
			'Content-Type': 'audio/mpeg'
		});
		
		fs.createReadStream(pathToSong, {start, end}).pipe(res);
	}
	else{
		res.writeHead(200, {
			'Content-Length': size,
			'Content-Type': 'audio/mpeg'
		});
	
		fs.createReadStream(pathToSong).pipe(res);
	}
}
