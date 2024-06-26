import React, { useContext, useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import  useConversation  from '../zustand/useConversations.js'

const useListenMessages = () => {
  const {socket}= useSocketContext()
  const {messages,setMessages} = useConversation()
    useEffect(() => {
        
            socket?.on("newMessage",(newMessage) => {
                newMessage.shouldShake = true;
                setMessages([...messages,newMessage]);
            })
        
        return () => {
        
                socket?.off("newMessage");
            
        }
    }, [socket,messages,setMessages])
}

export default useListenMessages