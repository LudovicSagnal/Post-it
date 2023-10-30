const router = require('express').Router();
const { allPosts, addPost} = require('../controllers/postController.js');

router.get('/', allPosts);
router.post('/', addPost);

module.exports = router;