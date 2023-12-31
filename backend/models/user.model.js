const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            maxLength: 100,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            maxLength: 100,
        },
        password: {
            type: String,
            required: true,
            maxLength: 100,
        },
        photo: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("users", UserSchema);
