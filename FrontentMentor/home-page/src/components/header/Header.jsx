import Logo from "../../assets/images/logo.svg";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="flex place-content-between items-center mb-[1.5rem]">
            <img src={Logo} alt="Logo"/>
            <Navbar />
        </header>
    )
}

export default Header;