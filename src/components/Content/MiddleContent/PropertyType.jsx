import VacationSwiper from "../../../utils/VacationSwiper";
import hotelsImg from "../../../assets/images/hotels.png";
import apartImg from "../../../assets/images/apartments.png";
import resortsImg from "../../../assets/images/resorts.png";
import villasImg from "../../../assets/images/villas.png";

const properties = [
  { name: "Hotels", image: hotelsImg },
  { name: "Apartments", image: apartImg },
  { name: "Resorts", image: resortsImg },
  { name: "Villas", image: villasImg },
  { name: "Hotels", image: hotelsImg },
  { name: "Apartments", image: apartImg },
  { name: "Resorts", image: resortsImg },
  { name: "Villas", image: villasImg },
  { name: "Hotels", image: hotelsImg },
  { name: "Apartments", image: apartImg },
  { name: "Resorts", image: resortsImg },
  { name: "Villas", image: villasImg },
  { name: "Hotels", image: hotelsImg },
  { name: "Apartments", image: apartImg },
  { name: "Resorts", image: resortsImg },
  { name: "Villas", image: villasImg },
];

function PropertyType() {
  return (
    <div className="mt-9">
      <h1 className="font-bold text-4xl text-black">Browse by property type</h1>
      <div className="mt-9">
        <VacationSwiper items={properties} countSlides={3} />
      </div>
    </div>
  );
}

export default PropertyType;
