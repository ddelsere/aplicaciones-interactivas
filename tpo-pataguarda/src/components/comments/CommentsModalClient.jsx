import React, { useEffect, useState } from 'react';
import './comments.css';


const CommentsModalClient = ({ idService, userType, onClose, idUser }) => {

    const [comments, setComments] = useState([]);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [score, setScore] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ message, score });
        newComment();
    };
    
    
    const fetchComments = async () => {
        try {
            const response = await fetch(`http://localhost:8081/api/v1/services/comments/${idService}/${userType}`);
            const data = await response.json();
            console.log(data)
            if (response.ok) {
                setComments(data);
            }
            if (!response.ok) {              
                throw new Error('Failed to fetch comments');
            }

        } catch (error) {
            setError(error.message);
        } 
    };

    //trae los comentarios cuando el modal se abre
    useEffect(() => {
        console.log(idService)
        console.log(userType);
        if (idService && userType) {
            fetchComments();
        }
    }, []);


    const newComment = async () => {
        try {
            let body = {
                message: message,
                score: score,
                idUser: idUser.idClient,
                idService: idService
            }
            const response = await fetch(`http://localhost:8081/api/v1/services/comments/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error('Failed to update comment');
            }
            body = {
                message: "",
                score: 0,
                idUser: idUser.idClient,
                idService: idService
            }
            fetchComments();
            onClose();
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <button type="button" className="close-button" onClick={onClose}>×</button>              
                {comments.length === 0 ? (
                    <p>Aun no hay comentarios</p>
                ) : (
                    comments.map(comment => (
                        <div key={comment.id} className="comment">
                            <div className="comment-header">
                                <div className="comment-avatar"></div>
                                <div className="comment-user">
                                    <p>{comment.User.name} {comment.User.surname}</p>
                                    <p>{'★'.repeat(comment.score)}</p>
                                    <p>{comment.message}</p>
                                </div>
                            </div>
                            <p className="comment-text">{comment.text}</p>
                            
                        </div>
                    ))
                )}
                <form onSubmit={handleSubmit}>
                <textarea
                    className="comment-box-textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe tu comentario..."
                />
                <div className="comment-box-footer">
                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`star ${star <= score ? 'selected' : ''}`}
                                onClick={() => setScore(star)}
                            >
                                &#9733;
                            </span>
                        ))}
                    </div>
                    <button type="submit" className="comment-box-button">
                        COMENTAR
                    </button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default CommentsModalClient;