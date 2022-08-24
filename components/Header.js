import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avter from "./Avter";
import ChangUserName from "./ChangUserName"

const Header = () => {
    const {user} = useMoralis();
    return (
        <div className=" text-pink-500 sticky p-5 top-0 z-50 bg-black shadow-sm border-b-2 border-pink-700">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
              <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                <Image layout="fill" objectFit="cover" className="rounded-full" src="https://links.papareact.com/3pi"/>
              </div>
              <div className=" col-span-4 text-left lg:text-center">
                <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
                   <Avter logoutOnpress/>
                </div>
                <h1 className="text-3xl">Welcome to the PAPAFAM Metavers</h1>
                <h2 className="font-bold text-5xl truncate">{user.getUsername()}</h2>
                <ChangUserName/>
              </div>
            </div>
        </div>
    )
}

export default Header

