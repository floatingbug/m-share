let module_getUserData = require('../module/module_getUserData');

module.exports = async (req, res)=>{
	if(req.session.user){
		let userData = await module_getUserData(req.session.user.email);

		res.send(JSON.stringify(userData.alben));
	}
};
