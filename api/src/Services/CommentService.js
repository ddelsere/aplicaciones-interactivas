const Comment = require('../model/commentModel');
const User = require('../model/UserModel');
const Booking = require('../model/BookingModel');

// Create a new comment
const createComment = async (commentData) => {
    try {
        const comment = await Comment.create(commentData);
        return comment;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all comments
const getAllComments = async () => {
    try {
        const comments = await Comment.findAll({
            include: [User, Booking],
        });
        return comments;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get a comment by ID
const getCommentById = async (id) => {
    try {
        const comment = await Comment.findByPk(id, {
            include: [User, Booking],
        });
        if (!comment) {
            throw new Error('Comment not found');
        }
        return comment;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a comment
const updateComment = async (id, updateData) => {
    try {
        const comment = await Comment.findByPk(id);
        if (!comment) {
            throw new Error('Comment not found');
        }
        await comment.update(updateData);
        return comment;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete a comment
const deleteComment = async (id) => {
    try {
        const comment = await Comment.findByPk(id);
        if (!comment) {
            throw new Error('Comment not found');
        }
        await comment.destroy();
        return { message: 'Comment deleted successfully' };
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createComment,
    getAllComments,
    getCommentById,
    updateComment,
    deleteComment,
};
