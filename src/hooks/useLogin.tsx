import { useEffect, useState } from 'react'
import { onAuthStateChanged,User, } from 'firebase/auth'
import {auth} from '../../firebase'
const useLogin = () => {
    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)
    const [user,setUser] = useState<User|null>(null)
    const [loading,setLoading] = useState<boolean>(true)
   
    useEffect(()=>{
       setLoading(true) 
         const unsubscribe =    onAuthStateChanged(auth,(user)=>{
            
                if(!user){
                    setIsLoggedIn(false)
                    setUser(null)
                    setLoading(false)
                }else{

                setIsLoggedIn(true)
                setUser(user)
                setLoading(false)
                }
            })
            setLoading(false)
            return unsubscribe;
    },[isLoggedIn,user,auth])

  return {isLoggedIn,user,loading}
}
export default useLogin