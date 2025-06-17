import mongoose from "mongoose"

const { Schema } = mongoose

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true }
    },
    { timestamps: true }
)

export const userModel = mongoose.models.Users || mongoose.model("Users", userSchema, "users")
