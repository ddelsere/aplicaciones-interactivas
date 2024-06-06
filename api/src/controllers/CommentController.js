const commentService = require('../services/CommentService');

// Create a new comment
exports.createComment = async (req, res) => {
    try {
        const comment = await commentService.createComment(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all comments
exports.getAllComments = async (req, res) => {
    try {
        const comments = await commentService.getAllComments();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a comment by ID
exports.getCommentById = async (req, res) => {
    try {
        const comment = await commentService.getCommentById(req.params.id);
        res.status(200).json(comment);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Update a comment
exports.updateComment = async (req, res) => {
    try {
        const comment = await commentService.updateComment(req.params.id, req.body);
        res.status(200).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
    try {
        await commentService.deleteComment(req.params.id);
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
