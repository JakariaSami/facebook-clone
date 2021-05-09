import React, { useState } from 'react'
import './CSS/MessageSender.css'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from './StateProvider'
import db from '../Firebase'
import firebase from 'firebase'

function MessageSender() {
  const [{ user }, dispatch] = useStateValue()
  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      userName: user.displayName,
      image: imageUrl,
    })

    setInput('')
    setImageUrl('')
  }

  return (
    <div className='messageSender'>
      <div className='messageSender_top'>
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='messageSender_input'
            type='text'
            placeholder={`What's on your mind ${user.displayName}?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder='image URL (Optional)'
          />
          <button onClick={handleSubmit}>Hidden submit</button>
        </form>
      </div>
      <div className='messageSender_bottom'>
        <div className='messageSender_option'>
          <VideocamIcon style={{ color: 'red' }} />
          <h4>Live Video</h4>
        </div>

        <div className='messageSender_option'>
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h4>Photo/Video</h4>
        </div>

        <div className='messageSender_option'>
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  )
}
export default MessageSender
