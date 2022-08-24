import { useMoralis } from "react-moralis";
const ChangUserName = () => {
    const { setUserData, userError, isUserUpdating, user } = useMoralis();

    const setUsername =()=>{
        const username = prompt(`Enter your new username (current:${user.getUsername()})`);
        if(!username) return;
        setUserData({
            username,
        })
    }
    return (
        <div className="text-sm absolute right-5 top-5">
            <button disabled={isUserUpdating} onClick={setUsername} className="hover:text-pink-700">change user name</button>
        </div>
    )
}

export default ChangUserName
