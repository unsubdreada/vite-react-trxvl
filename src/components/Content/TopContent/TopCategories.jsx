import { PiPersonSimpleSwimBold } from "react-icons/pi";
import { PiCactus } from "react-icons/pi";
import { PiMountainsLight } from "react-icons/pi";
import { GiPisaTower } from "react-icons/gi";
import { MdOutlineHouseboat } from "react-icons/md";
import { GiHutsVillage } from "react-icons/gi";
import { GiCampingTent } from "react-icons/gi";
import { PiCastleTurret } from "react-icons/pi";
import { FaPersonSkiing } from "react-icons/fa6";
import { GiPalmTree } from "react-icons/gi";

const categories = [
  { name: "Beaches", icon: <PiPersonSimpleSwimBold /> },
  { name: "Deserts", icon: <PiCactus /> },
  { name: "Mountains", icon: <PiMountainsLight /> },
  { name: "Iconic Cities", icon: <GiPisaTower /> },
  { name: "Houseboats", icon: <MdOutlineHouseboat /> },
  { name: "Countryside", icon: <GiHutsVillage /> },
  { name: "Camping", icon: <GiCampingTent /> },
  { name: "Castles", icon: <PiCastleTurret /> },
  { name: "Skiing", icon: <FaPersonSkiing /> },
  { name: "Tropical", icon: <GiPalmTree /> },
];

function TopCategories() {
  return (
    <div className="flex flex-col mt-10">
      <h1 className="font-bold text-3xl text-center lg:text-left 2xl:text-5xl xl:text-4xl md:text-3xl text-white ">
        Top categories
      </h1>
      <div className="grid grid-cols-2 gap-1 2xl:flex 2xl:gap-11 xl:grid-cols-5 xl:gap-6 lg:grid-cols-5 lg:gap-6 md:grid-cols-5 md:gap-6 sm:grid-cols-5 sm:gap-6 text-white/50 mt-8">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className="flex flex-col 2xl:gap-y-4 xl:gap-y-3 items-center hover:text-white"
            >
              <span className="text-7xl  2xl:text-8xl xl:text-8xl lg:text-8xl md:text-8xl sm:text-7xl">
                {category.icon}
              </span>
              <p className="text-2xl 2xl:text-xl xl:text-xl md:text-sm sm:text-xl">
                {category.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopCategories;
