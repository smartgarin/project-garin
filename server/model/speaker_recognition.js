import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		userNumber: { type: Number, default: 0, max: 50, index: true },
		name: String,
		ID: String,
		PW: { type: String, required: true, trim: true },
		email: { type: String, required: true, unique: true, lowercase: true }
	}
);

module.exports = mongoose.model("user", userSchema, "users");