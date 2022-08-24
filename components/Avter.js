import { useMoralis } from "react-moralis";
import Image from "next/image";

const Avter = ({username,logoutOnpress}) => {
    const {user,logout} = useMoralis();
    return (
        <div>
            <Image className="rounded-full cursor-pointer bg-black hover:opacity-75"
            src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get("username")}.svg`}
            layout="fill"
            onClick={()=>logoutOnpress && logout()}
            />
        </div>
    )
}

export default Avter
