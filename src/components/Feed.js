import React, {useEffect, useState} from 'react'
import './CSS/Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from '../Firebase'

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts')
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    )
  }, [])

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

    {posts.map((post) =>(
      <Post
      key={post.data.id}
      profilePic={post.data.profilePic}
      image={post.data.image}
      userName={post.data.userName}
      timestamp={post.data.timestamp}
      message={post.data.message}
      />
    ))}
    

    </div>
  )
}

export default Feed
