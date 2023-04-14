import React, { useEffect, useState } from 'react'
import './Feed.css'
import InputOption from '../InputOption/InputOption'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from '../Post/Post'
import { db } from '../firebase'
import {collection, onSnapshot,doc,setDoc,serverTimestamp,orderBy,query} from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import FlipMove from 'react-flip-move'


const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const data = query(
      collection(db, 'posts'),
      orderBy('timestamp', 'desc')
    )

    onSnapshot(data, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    })
  })

  const sendPost = (e) => {
    e.preventDefault()

    setDoc(doc(db, 'posts', input), {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl||'',
      timestamp: serverTimestamp()
    })

    setInput("");
  }

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />

          <form>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button
              onClick={sendPost}
              type='submit'
            >
              send
            </button>
          </form>
        </div>

        <div className='feed__inputOptions'>
          <InputOption
            title='Photo'
            Icon={ImageIcon}
            color='70b5f9'
          />

          <InputOption
            title='Video'
            Icon={SubscriptionsIcon}
            color='e7a33e'
          />

          <InputOption
            title='Event'
            Icon={EventNoteIcon}
            color='c0cbcd'
          />

          <InputOption
            title='Write Article'
            Icon={CalendarViewDayIcon}
            color='7fc15e'
          />
        </div>
      </div>

      <FlipMove>
      {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed