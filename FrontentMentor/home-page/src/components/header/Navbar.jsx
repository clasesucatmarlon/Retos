import menuIcon from "../../assets/images/icon-menu.svg";

const Navbar = () => {
    return (
        <>
            <ul className="hidden text-[1.2rem] sm:flex sm:w-[27rem] sm:place-content-around sm:text-[1rem]">
                <li>
                    <a href="#"><li>Home</li></a>
                </li>
                <li>
                    <a href="#"><li>New</li></a>
                </li>
                <li>
                    <a href="#"><li>Popular</li></a>
                </li>
                <li>
                    <a href="#"><li>Trending</li></a>
                </li>
                <li>
                    <a href="#"><li>Categories</li></a>
                </li>
            </ul>
            <img src={menuIcon} alt="Menú" className="w-8 h-7 cursor-pointer sm:hidden" />
        </>
    )
}

export default Navbar;




