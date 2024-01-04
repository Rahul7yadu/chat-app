"use client"
import { Button } from "@/components/ui/button"
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth"
import {collection,doc,addDoc,getDoc,setDoc} from 'firebase/firestore'
import {auth,db} from '../../firebase'
import {} from '@radix-ui/react-icons'
const provider = new GoogleAuthProvider()
  const GoogleLogin = () => {
    async function signInHandler(){
    const newUser = await signInWithPopup(auth,provider)
    const users  = collection(db,'users')
    const userExists = await getDoc(doc(users, newUser.user.uid));
    console.log(userExists.exists())
    if(!userExists.exists()){
      const docRef = doc(users,newUser.user.uid)
    await setDoc(docRef,{
      name:newUser.user.displayName,
      email:newUser.user.email,
      photoUrl:newUser.user.photoURL
    })
    }
  }
  return (
    <Button onClick={()=>signInHandler()}>Login with Google</Button>
  )
}
export default GoogleLogin