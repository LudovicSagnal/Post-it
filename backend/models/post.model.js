const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            maxLenght:200,
        },
        content: {
            type: String,
            required: true,
            maxLenght:2000,
        },
        author: {
            type: String,
            required: true,
            maxLenght:200,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("posts", PostSchema);