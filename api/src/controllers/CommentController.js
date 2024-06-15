const commentService = require('../services/CommentService');

// Create a new comment
exports.createComment = async (req, res) => { //checked
    try {
        const comment = await commentService.createComment(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all comments
exports.getAllComments = async (req, res) => { //no se usa
    try {
        const comments = await commentService.getAllComments();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a comment by ID service
exports.getCommentByIdService = async (req, res) => { //checked
    try {
        const comment = await commentService.getCommentByIdService(req.params.id, req.params.userType);
        res.status(200).json(comment);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Update a comment
exports.updateComment = async (req, res) => { //checked
    try {
        const comment = await commentService.updateComment(req.params.id, req.body);
        res.status(200).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


