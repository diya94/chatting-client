import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: false
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        livesin: String,
        worksAt: String,
        country: String,
        relationship: String,
        followers: [],
        following: []
    },
    { timestamps: true }
)


const UserModel = mongoose.model("Users", UserSchema);

export default UserModel