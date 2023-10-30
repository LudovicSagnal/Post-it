import React, { useState } from 'react';
import List from '../components/List'
import AddForm from '../components/AddForm'

const UserPage = () => {

  const [postChange, setPostChange] = useState(false);

    return (
        <main className='user-page'>
            <List postChange={postChange} setPostChange={setPostChange} />     
            <AddForm postChange={postChange} setPostChange={setPostChange} />    
        </main>
    );
};

export default UserPage;