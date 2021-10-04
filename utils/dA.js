const axios = require('axios');

module.exports = async (req, res, next) => {
	const url = `https://www.deviantart.com/oauth2/token?client_id=${process.env.DA_CLIENT_ID}&client_secret=${process.env.DA_CLIENT_SECRET}&grant_type=client_credentials`
    try {
        const token = await axios({
            method: 'GET',
            url
        });
        console.log(token)
		return token.data.access_token
    } catch (error) {
        console.log(error.message)
        return 'error'
    }
}