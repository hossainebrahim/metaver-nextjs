import { useMoralis } from "react-moralis";
import TimeAgo from 'timeago-react';
import Avter from "./Avter";

const Messagei = ({message}) => {
    const {user} = useMoralis();

    const isUsermessage = message.get("ethAddress") === user.get("ethAddress")
    return (
        <div className={`flex items-end space-x-2 relative ${isUsermessage && " justify-end"}`}>
        <div className={`relative h-8 w-8 ${isUsermessage && "order-last ml-2"}`}>
          <Avter username={message.get('username')}/>
        </div>
          <div className={`flex p-3 space-x-4 rounded-lg ${isUsermessage ? 'rounded-br-none bg-pink-300':' rounded-bl-none bg-blue-400'}`}>
              <p>{message.get("message")}</p>
          </div>
          <TimeAgo
           className={`text-[10px] text-gray-400 italic ${isUsermessage && " order-first pr-1"}`}
          datetime={message.createdAt}/>
          <p className={`absolute -bottom-5 text-xs ${isUsermessage ? "text-pink-300":" text-blue-400"}`}>{message.get("username")}</p>
        </div>
    )
}

export default Messagei;
