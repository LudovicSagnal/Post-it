const express = require('express');
const app = express();
const PostModel = require('../backend/models/post.model');
// const UserModel = require('../backend/models/user.model');

//cors 
const cors = require('cors');

const corsOptions = {
    origin: ['http://localhost:5173'],
    credentials: true,
    allowHeaders: ['sessionId', 'Content-Type'],
    exposeHeaders: ['sessionId'],
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    preflightContinue: false,
}

app.use(cors(corsOptions));

require('dotenv').config({ path: "./.env"});
require('./config/database');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes/post.routes'));
app.use('/', require('./routes/user.routes'));

app.put('/posts/:id', async (req, res) => {
    const postId = req.params.id;
    const { title, content, author } = req.body;
    try {
      const updatedPost = await PostModel.findOneAndUpdate(
        { _id: postId },
        { title, content, author },
        { new: true }
      );
      if (!updatedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
      return res.json({ message: 'Post updated successfully', updatedPost });
    } catch (error) {
      console.error("Error updating post:", error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
});  

app.delete('/posts/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        const deletedPost = await PostModel.findOneAndDelete({ _id: postId });
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        return res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error("Error deleting post:", error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT);
});