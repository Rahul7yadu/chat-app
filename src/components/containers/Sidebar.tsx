import Header from "./Header"
import Users from "@/Elements/Users"

const users = [{name:'rahul'},{name:'rahul'},{name:'rahul'},{name:'rahul'},{name:'rahul'},{name:'rahul'}]

const Sidebar = ({handleToSend}:{handleToSend:(user:string,name:string)=>void}) => {
  return (
    <div className="flex flex-col border-border border-4 sm:max-w-[400xp]">
        <Users handleToSend={handleToSend}/> 
    </div>
  )
}
export default Sidebar