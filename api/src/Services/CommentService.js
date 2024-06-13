const Comment = require('../model/commentModel');
const User = require('../model/UserModel');
const Booking = require('../model/BookingModel');

// Create a new comment
const createComment = async (commentData) => {
    try {
        const comment = await Comment.create({...commentData, status: 'PENDIENTE', date: new Date()});
        return comment;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all comments
const getAllComments = async () => { //no se usa
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
const getCommentByIdService = async (id, userType) => {
    try {
        if(userType == "C"){
            const comments = await Comment.findAll({
                where: {
                    idService: id,
                    status: 'ACEPTADO'
                }
            });            
            return comments;
        }else{
            const comments = await Comment.findAll({
                where: {
                    idService: id
                }
            });            
            return comments;
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a comment
const updateComment = async (id, updateData) => {
    try {
        console.log(updateData)
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
// const deleteComment = async (id) => {
//     try {
//         const comment = await Comment.findByPk(id);
//         if (!comment) {
//             throw new Error('Comment not found');
//         }
//         await comment.destroy();
//         return { message: 'Comment deleted successfully' };
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };

module.exports = {
    createComment,
    getAllComments,
    getCommentByIdService,
    updateComment
};
