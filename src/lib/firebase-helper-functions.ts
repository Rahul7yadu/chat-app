import { db } from "../../firebase"
import { setDoc, collection,doc, serverTimestamp, addDoc} from "firebase/firestore"
const sendMessage =async (senderId:string,receiverId:string,message:string) =>{

    const collRef = collection(db,'messages',senderId,receiverId)
    const toSendColRef = collection(db,'messages',receiverId,senderId);

    // saving to myself
   const res =  await addDoc(collRef,{
        type:'sent',
        message:message,
        time:serverTimestamp()
    })

    // saving to other user
    await addDoc(toSendColRef,{
        type:'received',
        message:message,
        time:serverTimestamp()
    })
    console.log(res)

}


export {sendMessage}