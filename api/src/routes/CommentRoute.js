const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.post('/', commentController.createComment);
router.get('/', commentController.getAllComments);
router.get('/:id/:userType', commentController.getCommentByIdService); //userType: P o C
router.put('/:id', commentController.updateComment);
// router.delete('/:id', commentController.deleteComment);

module.exports = router;
