let module_getUserData = require('../module/module_getUserData');

module.exports = async (req, res)=>{
	if(req.session.user){
		let userEmail = req.session.user.email;
		let userData = await module_getUserData(userEmail);
		let alben = userData.alben;
		
		res.render('index', {
			login: false,
			userPage: true,
			alben: alben
		});
	}
	else{
		res.render('index', {
			login: true,
			userPage: false
		});
	}
}
