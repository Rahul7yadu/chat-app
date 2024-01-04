import { useEffect,useState } from "react"
import { collection,getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import { useAuthContextValues } from "@/context/AuthContext"
import { Button } from "@/components/ui/button"
type Users = {name:string,photoUrl:string,email:string,id:string}

const Users = ({handleToSend}:{handleToSend:(user:string,name:string)=>void}) => {
    const [users,setUsers] = useState<Users[]|null>([])
    const [selected,setSelected] = useState(false);
    
    useEffect(()=>{
        async function getUser(){
        const collRef = collection(db,'users');

        const query = await getDocs(collRef)
        console.log(query)
         const users:Users[] = []
        query.forEach((user)=>{
                console.log('users')
                users.push({id:user.id, name:user.data().name,email:user.data().email,photoUrl:user.data().photoUrl}) 
        })
        setUsers(users)
        }
        getUser()
    },[])



  return (
    <div className="flex flex-col"> 
        {users&&users.map((user)=><User key={user.id} name={user.name} photoUrl={user.photoUrl} 
        id={user.id} handleToSend={handleToSend}
        />)}
        
    </div>
  )
}


const User = ({name,photoUrl,id,handleToSend}:{name:string,photoUrl:string,id:string,handleToSend:(user:string,name:string)=>void})=>{
    const {user} = useAuthContextValues()
        if(id===user?.uid) return
    return(
    <Button className="flex justify-between border-b-2 border-border p-2 h-14" onClick={()=>handleToSend(id,name)}>
            <img src = {photoUrl} className="w-14 h-14 rounded-full"/>
            <p>{name}</p>
    </Button>)
}


export default Users