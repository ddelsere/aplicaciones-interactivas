import React, { useEffect, useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './comments.css';


const CommentsModalProvider = ({ idService, userType, onClose }) => {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const fetchComments = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(`http://localhost:8081/api/v1/services/comments/${idService}/${userType}`);
            const data = await response.json();
            
            if (response.ok) {
                setComments(data);
            }
            if (!response.ok) {
                throw new Error('Failed to fetch comments');
            }

        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    //trae los comentarios cuando el modal se abre
    useEffect(() => {
        if (idService && userType) {
            fetchComments();
        }
    }, []);


    const updateCommentStatus = async (commentId, status) => {
        try {
            console.log('update: ' + status + " - " + commentId);
            const response = await fetch(`http://localhost:8081/api/v1/services/comments/${commentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status }),
            });

            if (!response.ok) {
                throw new Error('Failed to update comment');
            }

            fetchComments();
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <button type="button" className="close-button" onClick={onClose}>×</button>
                {error && <p className="error">{error}</p>}
                {isLoading ? (
                    <p>Loading...</p>
                ) : ( comments.length === 0 ? (
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
                            {comment.status === 'PENDIENTE' && (
                                <div className="comment-actions">
                                    <FaCheck style={{ color: "green" }} className="icon" onClick={() => updateCommentStatus(comment.id, 'ACEPTADO')} />
                                    <FaTimes style={{ color: "red" }} className="icon" onClick={() => updateCommentStatus(comment.id, 'BLOQUEADO')} />
                                </div>
                            )}
                        </div>
                    ))
                ))}
            </div>
        </div>
    );
};

export default CommentsModalProvider;