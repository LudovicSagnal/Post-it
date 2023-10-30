const postModel = require('../models/post.model');

// Retrieve all posts
module.exports.allPosts = async (req, res) => {
  try {
    const posts = await postModel.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch posts', error: err });
  }
};

// Add a new post
module.exports.addPost = async (req, res) => {
  const { title, content, author } = req.body;

  const newPost = new postModel({
    title,
    content,
    author,
  });

  try {
    const post = await newPost.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create a post', error: err });
  }
};


// const postModel = require('../models/post.model');

// module.exports.allPosts = (req, res) => {
//     postModel
//         .find((err, docs) => {
//             if (!err) return res.status(200).send(docs);
//             else return res.status(400).send('Invalid, cannot find data'+err);
//         })
//         .sort({ createdAt: -1 });
// };

// module.exports.addPost = async (req, res) => {
//     const newPost = new postModel({
//         title: req.body.title,
//         content: req.body.content,
//         author: req.body.author,
//     });

//     try {
//         const post = await newPost.save();
//         return res.status(201).json(post);
//     } catch (err) {
//         return res.status(400).json({message: err});
//     }
// };