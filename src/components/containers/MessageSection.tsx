import { Input } from "../ui/input"
import { Button } from "../ui/button"
import   {SendHorizonal} from 'lucide-react'
import { useAuthContextValues } from "@/context/AuthContext"
import { useState,FormEvent } from "react"
import { sendMessage } from "@/lib/firebase-helper-functions"
import Messages from "@/Elements/Messages"
const MessageSection = ({toSend,name}:{toSend:string|null,name:string}) => {
    const {user} = useAuthContextValues()


  return (
    <div className="w-full flex flex-col justify-end  border-4  ">
        <div className="text-lg w-full rounded-sm bg-background h-10 text-center">{name}</div>
       {toSend && user && <Messages toSend={toSend} user={user}/>}
       <Send toSend={toSend}/>
    </div>
  )
}
export default MessageSection

const Send = ({toSend}:{toSend:string|null})=>{
    const {user} = useAuthContextValues()
    const [input,setInput] = useState('')
    const [loading,setLoading] = useState(false)
    const handleSubmit = async ()=>{
        if(!user || !toSend) return;
       await sendMessage(user?.uid,toSend,input)
    }
    const submitHandler = async (e:FormEvent<HTMLFormElement>)=>{
        setLoading(true)
        e.preventDefault()
        await handleSubmit()
        setInput('')
        setLoading(false)
    }
    return(
        <form className=" flex w-full bottom-2 justify-end border-border " onSubmit={(e)=>submitHandler(e)}>
        <Input className="w-full border-foreground" onChange={(e)=>setInput(e.target.value)} value={input}/>
        <Button type="submit" disabled={loading}><SendHorizonal/></Button>
    </form>
    )
}