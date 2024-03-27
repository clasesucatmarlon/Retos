import { useState } from "react";
import Logo from "../../assets/images/logo.svg";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className="text-[2.4rem] absolute right-8 top-8 cursor-pointer sm:hidden">
                <ion-icon name={showMenu ? "close-outline" : "menu-outline"} onClick={() => setShowMenu(!showMenu)}></ion-icon>
            </div>

            <ul className={`absolute sm:static bg-white pl-7 w-[65%] left-0 h-[70%] sm:h-0 flex flex-col sm:flex-row  text-[1.2rem] sm:flex sm:w-[27rem] sm:place-content-between sm:text-[1rem] transition-all duration-500 ease-in ${showMenu ? 'top-[0%]' : 'top-[-100%]'} justify-around`}>
                <li>
                    <img src={Logo} alt="Logo" className={showMenu ? "flex w-9 mt-[20%] sm:hidden" : "sm:hidden"} />
                </li>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">New</a>
                </li>
                <li>
                    <a href="#">Popular</a>
                </li>
                <li>
                    <a href="#">Trending</a>
                </li>
                <li>
                    <a href="#">Categories</a>
                </li>
            </ul>
        </>
    )
}

export default Navbar;




