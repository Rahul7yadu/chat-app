import { Skeleton } from "../components/ui/skeleton"
const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center ">
        <Skeleton className="w-full h-full rounded-full "/>
    </div>
  )
}
export default Loading