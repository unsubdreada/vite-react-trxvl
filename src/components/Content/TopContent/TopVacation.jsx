import VacationSwiper from "../../../utils/VacationSwiper";
import baliImg from "../../../assets/images/bali.png";
import kerryImg from "../../../assets/images/kerry.png";
import sydneyImg from "../../../assets/images/sydney.png";
import parisImg from "../../../assets/images/paris.png";
import kazanImg from "../../../assets/images/kazan.jpg";
import tokyoImg from "../../../assets/images/tokyo.jpg";
import newyorkImg from "../../../assets/images/newyork.jpg";
import capetownImg from "../../../assets/images/capetown.jpg";
import rioImg from "../../../assets/images/rio.jpg";
import barcelonaImg from "../../../assets/images/barcelona.jpg";

const destinations = [
  { name: "Bali, Indonesia", image: baliImg },
  { name: "Kerry, Ireland", image: kerryImg },
  { name: "Sydney, Australia", image: sydneyImg },
  { name: "Paris, France", image: parisImg },
  { name: "Kazan, Russia", image: kazanImg },
  { name: "Tokyo, Japan", image: tokyoImg },
  { name: "New York, USA", image: newyorkImg },
  { name: "Cape Town, South Africa", image: capetownImg },
  { name: "Rio de Janeiro, Brazil", image: rioImg },
  { name: "Barcelona, Spain", image: barcelonaImg },
];

function TopVacation() {
  return (
    <div className="flex flex-col mt-14">
      <h1 className="font-bold text-4xl text-white">
        Top Vacation Destinations
      </h1>
      <div>
        <VacationSwiper items={destinations} countSlides={5} />
      </div>
    </div>
  );
}

export default TopVacation;
