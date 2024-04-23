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
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("posts", PostSchema);