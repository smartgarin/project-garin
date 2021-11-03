import dotenv from "dotenv";
dotenv.config();
const devkey = {
	mongoURI: process.env.MONGO_URI,
	sessionSecret: process.env.SESSION_SECRET,
	hashSecret: process.env.HASH_SECRET,

	githubClientId: process.env.GITHUB_CLIENT_ID,
	githubSecret: process.env.GITHUB_SECRET,
	githubCallbackUri: process.env.GITHUB_CALLBACK_URI
};
export default devkey;