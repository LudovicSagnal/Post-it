import React, { useState } from 'react';
import axios from 'axios';

const AddForm = ({ setPostChange}) => {

    const [count, setCount] = useState(0);
    const maxLength = 2000;

    const addPost = async (e) => {
        e.preventDefault();
        const {data} = await axios.post('http://localhost:5000', {
            title: e.target[0].value,
            author: e.target[1].value,
            content: e.target[2].value,
        });
        setPostChange(true);
        setTimeout(() => {
            setPostChange(false);
            }, 2);
        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
    };
    
    return (
        <div className='add-form'>
            <form onSubmit={(e) => addPost(e)}>
                <label htmlFor="title">Titre</label>
                <input type="text" className='form-title' name='title' id='title' />
                <label htmlFor="author">Auteur</label>
                <input type="text" className='form-author' name='author' id='author' />
                <label htmlFor="content">Votre message</label>
                <textarea name="content" id="content" cols="30" rows="10" maxLength="2000" className='form-content' onChange={e => setCount(e.target.value.length)}></textarea>
                <p>{count}/{maxLength}</p>
                <input type="submit" className='form-submit' value="Publier" />
            </form>
        </div>
    );
};

export default AddForm;