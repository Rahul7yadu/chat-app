import GoogleLogin from "@/Elements/GoogleLogin"

const Landing = () => {
  return (
    <div className="w-full h-full gap-8 mt-20 flex flex-col items-center justify-center">
            <h1 className="text-5xl text-center">
                Please Login to Chat with friends
            </h1>
            <div>
            <GoogleLogin/>
            </div>
    </div>
  )
}
export default Landing