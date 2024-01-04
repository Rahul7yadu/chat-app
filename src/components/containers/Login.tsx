import { Button } from "@/components/ui/button";
import {Input} from '@/components/ui/input'
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState,FormEvent } from "react";
import { auth } from "../../../firebase";
import { useRouter } from "next/navigation";
import GoogleLogin from "../../Elements/GoogleLogin";
const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const router = useRouter()
    const handleSignUp = async (e:FormEvent<HTMLFormElement>)=>{
        setLoading(true)
            e.preventDefault()
            try {
            await signInWithEmailAndPassword(auth, email,password)
            setLoading(false)
            router.push('/')
            } catch (error) {
            console.log(error)  
            }
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full space-y-8">
        <div>
        <Link href='/'>
          <Button variant={'link'}>
        back
          </Button>
      </Link>
          <h2 className="text-foreground text-2xl text-center">
            Sign in  
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e)=>handleSignUp(e)}>
          {/* Email Input */}
         
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
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
         
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              placeholder='enter you password'
              required
              
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
         
          <div className='flex flex-col gap-2'>
            <Button
              disabled={loading}
              type="submit"
            >
            Sign In
            </Button>
            <GoogleLogin/>
          </div>
        </form>
        {/* Sign Up Link */}
        <div className="text-center">
          <Link
          href="/auth/register"
           
          >
            <Button variant={'link'}>
            create a new account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
  
}
export default Login