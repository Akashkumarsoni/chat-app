import React from 'react'
import ChatPage from './ChatPage'
import Chatpage2 from './Chatpage2'
import "./Chat.css"
const SplitScreen = () => {
  return (
    <div className='splitscreen'>
        <ChatPage />
        <Chatpage2 />
    </div>
  )
}

export default SplitScreen