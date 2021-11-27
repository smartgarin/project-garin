import mongoose from "mongoose";
const { Schema } = mongoose;


const audioSchema = new Schema(
    {
        audioName: { type: Number, required: true, trim: true },
        audioRoute: { type: String, trim: true },
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model("Audio", audioSchema);