const Comment = require('../model/commentModel');
const User = require('../model/UserModel');
const Booking = require('../model/BookingModel');
const Service = require('../model/ServiceModel');
const sequelize = require('../config/database');

// Create a new comment
const createComment = async (commentData) => {
    try {
        const comment = await Comment.create({...commentData, status: 'PENDIENTE', date: new Date()});
        //calcula el score del service en funcion de todos los score de los comentarios del servicio

        let score = await calculateAverageScore(commentData.idService);
        const service = await Service.findByPk(commentData.idService);
        if (!service) {
            throw new Error('Service not found');
        }
        await service.update({...service, score: score});

        return comment;
    } catch (error) {
        throw new Error(error.message);
    }
};

// funcion aux para calcular el promedio del score del servicio basandose en los score de los comentarios
async function calculateAverageScore(idService) {
    try {
        const result = await Comment.findAll({
            attributes: [
                [sequelize.fn('AVG', sequelize.col('score')), 'averageScore']
            ],
            where: {
                idService: idService
            }
        });

        const averageScore = result[0].get('averageScore');
        return averageScore;
    } catch (error) {
        console.error('Error calculating average score:', error);
    }
}

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



module.exports = {
    createComment,
    getAllComments,
    getCommentByIdService,
    updateComment
};
