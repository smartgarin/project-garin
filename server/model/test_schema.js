import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		name: String,
		ID: String,
		PW: { type: String, required: true, trim: true },
	}
);

module.exports = mongoose.model("user", userSchema, "users");