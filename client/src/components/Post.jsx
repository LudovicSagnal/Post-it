import React, { useState } from 'react';
import axios from 'axios';

const Post = ({ post, setPostChange }) => {

    const [editMode, setEditMode] = useState(false);
    const [editedTitle, setEditedTitle] = useState(post.title);
    const [editedContent, setEditedContent] = useState(post.content);
    const [openDelete, setOpenDelete] = useState(false);

    const editPost = () => {
        setEditedTitle(post.title);
        setEditedContent(post.content);
        setEditMode(true);
        console.log({post});
    };

    const cancelEdit = () => {
        setEditMode(false);
    }

    const saveEditedPost = async () => {
        try {
          await axios.put(`http://localhost:5000/posts/${post._id}`, {
            title: editedTitle,
            content: editedContent,
          });
          setEditMode(false);
          setPostChange(true);
          setTimeout(() => {
            setPostChange(false);
            }, 2);
        } catch (error) {
          console.error("Error editing post:", error);
        }
    };

    const confirmDelete = () => {
        setOpenDelete(true);
    };

    const cancelDelete = () => {
        setOpenDelete(false);        
    };

    const deletePost = async () => {
        try {
            await axios.delete(`http://localhost:5000/posts/${post._id}`);
            setPostChange(true)
            setOpenDelete(false);
            setTimeout(() => {
                setPostChange(false);
                }, 2);
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    return (
        <div className='post-card'>
            {editMode ? (
                <div>
                    <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                    <textarea value={editedContent} onChange={(e) => setEditedContent(e.target.value)} />
                    <button onClick={saveEditedPost}>Enregistrer</button>
                    <button onClick={cancelEdit}>Annuler</button>
                </div>
            ) : (
                <div className='inner-card'>
                    <h2 className='post-title'>{post.title}</h2>
                    <p className='post-content'>{post.content}</p>
                    <p className='post-author'>{post.author}</p>
                    <div className='post-buttons'>
                        <button onClick={editPost} className='post-edit'>Modifier</button>
                        <button onClick={confirmDelete} className='post-delete'>Supprimer</button>
                    </div>        
                </div>        
            )}
            {openDelete ? 
                <>
                    <div className='modal-delete'>
                        <p>Etes-vous sûr de vouloir le suprimer ?</p>
                        <div className='modal-buttons'>
                            <button onClick={deletePost}>Oui</button>
                            <button onClick={cancelDelete}>Non</button>                        
                        </div>
                    </div>
                    <div className='overlay'></div>
                </> : ""}            
        </div>
    );
};

export default Post;