import mongoose from "mongoose";
import SR from "./model/speaker_recognition";

const mongoURI = "mongodb://yt4307.iptime.org:27017";

const connectDB = () => {
	mongoose
		.connect(mongoURI, {
			ignoreUndefined: true,
		})
		.then(() => console.log("mongoDB connected"))
		.catch((err) => console.log(err));
};

mongoose.connection.on('error', (err) => {
    console.log('mongoDB Error occurred', err);
});

export default connectDB;