import SendMessage from "./SendMessage";
import { ByMoralis ,useMoralis,useMoralisQuery } from "react-moralis";
import { useRef } from "react";
import Messagei from "./Messagei"

const MINIT_MINT = 15;
const Message = () => {

    const {user}=useMoralis()
    const endOfMessageRef = useRef(null)
    const { data, error, isLoading } = useMoralisQuery(
        "Messages",
        (query)=> query.ascending('createdAt').greaterThan('createdAt',new Date(Date.now()-1000 * 60 * MINIT_MINT)
        ),
        [],
        {
            live:true
        }
    );
    return (
        <div className="pb-56">
            <div className="my-5">
              <ByMoralis variant="dark" style={{marginLeft:'auto',marginRight:'auto'}}/>
            </div>
            <div className="p-4 space-y-10">
              {data.map(message =>(
                  <Messagei key={message.id} message={message}/>
              ))}
            </div>
            <div className=" flex justify-center">
                <SendMessage endOfMessageRef={endOfMessageRef}/>
            </div>
            <div ref={endOfMessageRef} className="text-center text-gray-400 mt-5">
                <p>you are up the data {user.getUsername()}!</p>
            </div>
        </div>
    )
}

export default Message
