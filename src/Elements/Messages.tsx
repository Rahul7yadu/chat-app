import { useEffect, useState } from "react"
import { User } from "firebase/auth"
import {collection,getDocs,DocumentData,onSnapshot} from 'firebase/firestore'
import { db } from "../../firebase"
type Message  = {
id:string
}&DocumentData

const Messages = ({toSend,user}:{toSend:string,user:User}) => {

 const [messages,setMessages] = useState<Message[]>([])
  const getMeesages = async ()=>{
    if(!user || toSend===null){
      console.log({user,toSend})
      return
    }
        const messageRef = collection(db,'messages',user?.uid,toSend)
        const messages = await getDocs(messageRef)
        
        const receivedMessages:Message[] = []
        messages.forEach((message)=>{
            receivedMessages.push({id:message.id,...message.data()})
        })
       setMessages(receivedMessages)
        
  }
useEffect(()=>{
    
        getMeesages();
        const messageRef =  collection(db,'messages',user?.uid,toSend)
       const unsubscribe =  onSnapshot(messageRef,(snapshot)=>{
                snapshot.docChanges().forEach((change)=>{
                        if(change.type==='added'){
                            setMessages(prev=>[...prev,{id:change.doc.id,...change.doc.data()}])
                        }
                })

        })

        return unsubscribe;
},[toSend])

  return (
  
      <div className="flex flex-col h-[600px] overflow-y-scroll">
        {messages.map((message,idx)=><Message message={message} key={idx}/>)}
      </div>

  )
}
export default Messages



const Message = ({message}:{message:DocumentData})=>{
    const messageClass = message.type === 'sent' ?
        'bg-blue-500 text-white rounded-lg p-2 mb-1 ml-auto':
        'bg-gray-300 text-black rounded-lg p-2 mb-1 mr-auto';
    return (
        <div className={messageClass}> 
        {message.message}
        </div>
    )
}