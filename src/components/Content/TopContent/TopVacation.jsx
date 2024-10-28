import VacationSwiper from "../../../utils/VacationSwiper";

const destinations = [
  { name: "Bali, Indonesia", image: "src/assets/images/bali.png" },
  { name: "Kerry, Ireland", image: "src/assets/images/kerry.png" },
  { name: "Sydney, Australia", image: "src/assets/images/sydney.png" },
  { name: "Paris, France", image: "src/assets/images/paris.png" },
  { name: "Kazan, Russia", image: "src/assets/images/kazan.jpg" },
  { name: "Tokyo, Japan", image: "src/assets/images/tokyo.jpg" },
  { name: "New York, USA", image: "src/assets/images/newyork.jpg" },
  { name: "Cape Town, South Africa", image: "src/assets/images/capetown.jpg" },
  { name: "Rio de Janeiro, Brazil", image: "src/assets/images/rio.jpg" },
  { name: "Barcelona, Spain", image: "src/assets/images/barcelona.jpg" },
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
