import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { useState, FormEvent } from "react"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { setDoc, doc } from "firebase/firestore"
import { auth } from '../../../firebase'
import { db } from "../../../firebase"
import GoogleLogin from "../../Elements/GoogleLogin"
const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()


  const registerHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      const newUser = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(newUser.user, {
        displayName: name,
        photoURL:"https://th.bing.com/th/id/OIG.OvfhNJqnndz9m3lnkTSp?w=1024&h=1024&rs=1&pid=ImgDetMain"
      })
      const docRef = doc(db, "users", newUser.user.uid)
      await setDoc(docRef, {
        name: newUser.user.displayName,
        email: newUser.user.email,
        photoUrl: newUser.user.photoURL
      })
      router.push('/')
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8">
          <div>

            <h2 className="mt-6 text-center text-3xl font-extrabold text-foreground">
              Create your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => registerHandler(e)}>
            {/* Email Input */}
            {<div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <Input
                id="name"
                required
                placeholder="Enter your address"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required

                placeholder="Enter your address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                required
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Sign Up Button */}
            <div className='flex flex-col gap-3'>
              <Button
                type="submit"
              >
                Sign Up
              </Button>
              <GoogleLogin />
            </div>
          </form>
          <div className="text-center">
            <Link href='/auth/login'
            >
              <Button variant={'link'}>
                already a user  Sign in
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register