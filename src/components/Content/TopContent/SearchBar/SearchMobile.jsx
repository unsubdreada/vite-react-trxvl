import { FiSearch } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";

function SearchMobile() {
  return (
    <div className="flex flex-col w-3/4 mt-10 gap-2">
      <div className="flex flex-grow items-center gap-3 pl-2 bg-white/30 backdrop-blur-lg rounded-full text-sm text-white">
        <FiSearch className="text-2xl" />
        <input
          type="text"
          placeholder="Search destinations, hotels"
          className="bg-transparent placeholder:text-white focus:placeholder:opacity-0 outline-none w-full p-3"
        />
      </div>

      <div className="flex justify-center p-2 bg-white/30 backdrop-blur-lg rounded-full text-sm text-white">
        <div className="flex flex-1 justify-center items-center gap-2 border-r-2 pr-3">
          <FaRegCalendarCheck />
          <button>Check In</button>
        </div>
        <div className="flex flex-1 justify-center items-center gap-2 pl-3">
          <FaRegCalendarXmark />
          <button>Check Out</button>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 p-2 bg-white/30 backdrop-blur-lg rounded-full text-sm text-white">
        <IoIosPerson />
        <button>1 room, 2 adults</button>
      </div>

      <div className="flex justify-center">
        <button className="bg-white rounded-full text-s text-[#2659C3] font-bold py-3 px-10 hover:bg-[#2659C3] hover:text-white transition duration-200">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchMobile;
