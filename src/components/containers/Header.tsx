"use client"
import { useAuthContextValues } from "@/context/AuthContext"
import { Button } from "../ui/button"
import Loading from "../../Elements/Loading"
import { User } from "firebase/auth"
import { auth } from "../../../firebase"
import ThemeSwitchButton from "@/Elements/ThemeSwitchButton"
import Link from "next/link"
const Header = () => {
 const {loading,isLoggedIn,user} = useAuthContextValues()
 if(loading) return <Loading/>

return (<div className="w-full flex sm:justify-end justify-between gap-4 items-center  h-16 bg-background text-foreground  border-border border-b-2">
        {isLoggedIn?AuthUser(user):<UnAuthUser/>}
        <ThemeSwitchButton/>
      </div>)

}
export default Header


const AuthUser = (user:User|null)=>{
    if(!user) return null
    return(
        <div className="flex gap-4 items-center">
        <div>
          {user.photoURL && <img src = {user.photoURL} className="rounded-full w-10"></img>}
          <p>{user.displayName}</p>
        </div>
          <Button onClick={()=>auth.signOut()}>logout</Button>
        </div>
    )
}


const UnAuthUser = ()=>{
  return (
    <div className="flex gap-6">
      <Link href='/auth/login'>
      <Button variant={'outline'}>
              login
      </Button>
      </Link>
      <Link href='/auth/register'>
      <Button variant={'outline'}>
              register
      </Button>
      </Link>
    </div>
  )
}
