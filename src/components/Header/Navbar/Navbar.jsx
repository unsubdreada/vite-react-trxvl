import { CgMenuLeft } from "react-icons/cg";
import ButtonNav from "./ButtonNav";

const navigation = ["Home", "Stays", "Flights", "Packages", "Sign Up"];

function Navbar() {
  return (
    <div className="Navbar">
      <div className="md:hidden text-4xl text-white active:text-black">
        <CgMenuLeft />
      </div>
      <div className="hidden md:flex gap-10">
        {navigation.map((text, index) => {
          return <ButtonNav key={index} text={text} />;
        })}
      </div>
    </div>
  );
}

export default Navbar;
