import mongoose from "mongoose";

const mongoURI = "mongodb://yt4307.iptime.org:27017";

const connectDB = () => {
	mongoose
		.connect(mongoURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			ignoreUndefined: true,
			useFindAndModify: false,
		})
		.then(() => console.log("mongoDB connected"))
		.catch((err) => console.log(err));
};

mongoose.connection.on('error', (err) => {
    console.log('mongoDB Error occurred', err);
});

export default connectDB;