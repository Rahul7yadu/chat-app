"use client"
import { createContext, } from "react"
import { User } from "firebase/auth"
import useLogin from "../hooks/useLogin"
import { useContext } from "react"
const AuthContext = createContext<{isLoggedIn:boolean,user:User|null,loading:boolean}>({
    isLoggedIn:false,
    user:null,
    loading:false
})
 


const AuthContextProvider = ({children}:{children:React.ReactNode}) => {

const {isLoggedIn,user,loading} = useLogin()
  return (
    <AuthContext.Provider value={{isLoggedIn,user,loading}}>{children}</AuthContext.Provider>
  )
}

const useAuthContextValues = ()=>{
        const {loading,isLoggedIn,user} = useContext(AuthContext)

        return {loading,isLoggedIn,user}
}



export default AuthContextProvider
export {useAuthContextValues}