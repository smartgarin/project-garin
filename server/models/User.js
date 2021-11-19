import mongoose from "mongoose";
const { Schema } = mongoose;


const userSchema = new Schema(
    {
        userNumber: Number,
        name: { type: String, required: true, trim: true },
        ID: { type: String, required: true, trim: true },
        PW: { type: String, required: true, trim: true },
        email: { type: String, required: true, lowercase: true }
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model("User", userSchema);