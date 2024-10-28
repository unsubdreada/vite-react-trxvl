import { FiSearch } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";

const searchBtns = [
  { icon: <FaRegCalendarCheck />, text: "Check In" },
  { icon: <FaRegCalendarXmark />, text: "Check Out" },
  { icon: <IoIosPerson />, text: "1 room, 2 adults" },
];

function Search() {
  return (
    <div className="flex items-center justify-between mt-10 bg-white/30 backdrop-blur-lg rounded-3xl text-lg text-white p-2 gap-6">
      <div className="flex flex-grow items-center text-base gap-3 pl-2">
        <FiSearch className="text-2xl" />
        <input
          type="text"
          placeholder="Search destinations, hotels"
          className="bg-transparent placeholder:text-white focus:placeholder:opacity-0 outline-none w-full rounded-lg p-3"
        />
      </div>

      <div className="flex items-center 2xl:gap-6 xl:gap-4 text-base">
        {searchBtns.map((btn, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-3 hover:bg-white/20 rounded-lg transition duration-200 "
          >
            <div>{btn.icon}</div>
            <button>{btn.text}</button>
          </div>
        ))}
        <button className="bg-white rounded-full text-lg text-[#2659C3] font-bold py-3 px-10 hover:bg-[#2659C3] hover:text-white transition duration-200">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;

{
  /* <div className="flex items-center text-base gap-2">
        <FaRegCalendarCheck />
        <button>Check In</button>
      </div>

      <div className="flex items-center text-base gap-2">
        <FaRegCalendarXmark />
        <button>Check Out</button>
      </div>

      <div className="flex items-center text-base gap-2">
        <IoIosPerson />
        <button>1 room, 2 adults</button>
      </div> */
}
