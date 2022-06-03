let client = require('../mongo-cli');

module.exports = async (email)=>{
	let data = await getUserData(email);
	
	return data;
};

async function getUserData(email){
	try{
		await client.connect();
		let db = client.db('m-share');
		let collection_userData = db.collection('userData');

		let result = await collection_userData.findOne({
			email: email	
		});

		return result;
	}
	catch{
	}
	finally{
		await client.close();
	}
}
