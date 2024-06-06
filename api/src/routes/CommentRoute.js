const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.post('/create', commentController.createComment);
router.get('/', commentController.getAllComments);
router.get('/:id', commentController.getCommentById);
router.put('/update/:id', commentController.updateComment);
router.delete('/delete/:id', commentController.deleteComment);

module.exports = router;
