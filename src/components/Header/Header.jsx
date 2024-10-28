import Logo from "./Logo";
import Navbar from "./Navbar/Navbar";

function Header() {
  return (
    <div className="Header absolute z-50 md:fixed top-0 left-0 right-0">
      <div className="flex items-center max-w-screen py-6 px-12 md:bg-white/15">
        <div className="flex-grow flex justify-center md:justify-between order-last md:order-first">
          <Logo />
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Header;
