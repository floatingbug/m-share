let client = require('../mongo-cli');

module.exports = async (user)=>{
	let result = await getUser(user);

	return result;
}

async function getUser(user){
	try{
		await client.connect();
		let db = client.db('m-share');
		let collection_users = db.collection('user');
		
		let result = await collection_users.findOne({email: user.email, password: user.password});
		
		return result;
	}
	catch{
	}
	finally{
		await client.close()
	}
}
