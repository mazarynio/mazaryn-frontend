import React, { useState } from 'react';
import './PostCard.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ClearIcon from '@material-ui/icons/Clear';
import ImageIcon from '@material-ui/icons/Image';
import CheckIcon from '@material-ui/icons/Check';

function PostCard() {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState('');
  
  function handleChange(e){
    setPost(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    //post data to the backend and close the popup
    //check if the user has typed in something, if not, do not post to the db
    if(post.trim().length === 0){
      console.log('Type before submitting');
      return
    }
    closeModal();
  }

  function closeModal(){
    setOpen(false);
  }
  
  return (
    <div>
      <button type="button" className="postButton" onClick={() => setOpen(o => !o)}>
        Post
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <p className="cardTitle">Post</p>
        <form className='popupForm' onSubmit={handleSubmit}>
          <textarea onChange={handleChange} placeholder='Type something...' value={post} />
          <div className='popupFormBtns'>
            <ClearIcon onClick={closeModal}/>
            <ImageIcon />
            <CheckIcon onClick={handleSubmit}/>            
          </div>
        </form>
      </Popup>
    </div>
  );
}

export default PostCard;