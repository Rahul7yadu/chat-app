"use client"
import { useEffect,useState} from "react"
import { useRouter } from "next/navigation"
import { useAuthContextValues } from "@/context/AuthContext"
import Loading from "@/Elements/Loading"
import Sidebar from "./../components/containers/Sidebar"
import Landing from "@/components/containers/Landing"
import MessageSection from "@/components/containers/MessageSection"
const Home = () => {
  const {isLoggedIn,user,loading} = useAuthContextValues()
  const [toSend,setToSend] = useState<string|null>(null)
  const [toSendName,setToSendName] = useState('')

  function handleToSend(user:string,name:string){
    setToSend(user)
    setToSendName(name)
  }

if(loading) return (<Loading/>)
 if(!isLoggedIn) return <Landing/> 


  return (
    <div className="flex  w-full">
       <div className="sm:min-w-[400px]">
      <Sidebar handleToSend={handleToSend}/>
       </div>
      <div className="flex flex-col w-full ">
        <MessageSection toSend={toSend} name={toSendName}/>
      </div>
    </div>
  )
}
export default Home
