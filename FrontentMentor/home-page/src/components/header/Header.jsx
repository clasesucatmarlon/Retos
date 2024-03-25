import Logo from "../../assets/images/logo.svg";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="bg-red-500 flex place-content-between sm:items-center">
            <img src={Logo} alt="Logo"/>
            <Navbar />
        </header>
    )
}

export default Header;