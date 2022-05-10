let module_getUser = require('../module/module_getUser');

module.exports = async (req, res)=>{
	let userInput = req.body;

	let user = await module_getUser(userInput);
	
	if(user){
		req.session.user = user;
		res.render('index', {
			login: false, 
			userPage: true
		});
	}
	else{
		res.render('index', {
			login: true,
			userPage: false
		})
	}
}
