import { useState } from "react";
import {useMoralis} from "react-moralis";

const SendMessage = ({endOfMessageRef}) => {
    const {user,Moralis}=useMoralis()
    const [message,setMessage]=useState("")

    const SendMessages =(e)=>{
        e.preventDefault()

        if(!message) return;
        const Messages = Moralis.Object.extend("Messages")
        const messages = new Messages();
        messages.save({
            message:message,
            username:user.getUsername(),
            ethAddress:user.get("ethAddress")
        }).then((message)=>{

            },(error)=>{
                console.log(error.message);
            }
        )
        endOfMessageRef.current.scrollIntoView({behavior:"smooth"})
        setMessage("")
    }
    return (
        <form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">

            <input type="text" className=" flex-grow outline-none text-white bg-transparent placeholder-gray-500 mr-5" placeholder={`Enter a message ${user.getUsername()}`}
             value={message}
             onChange={(e)=> setMessage(e.target.value)}
            />
            <button type="submit" onClick={SendMessages} className="text-bold text-pink-500">Send</button>
        </form>
    )
}

export default SendMessage
