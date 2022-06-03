let module_getUser = require('../module/module_getUser');
let module_getUserData = require('../module/module_getUserData');

module.exports = async (req, res)=>{
	let userInput = req.body;
	let user = await module_getUser(userInput);

	if(user){
		req.session.user = user;
		let userData = await module_getUserData(user.email);

		res.redirect('/') 
	}
	else{
		res.render('index', {
			login: true,
			userPage: false
		})
	}
}
