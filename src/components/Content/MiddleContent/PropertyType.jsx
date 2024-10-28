import VacationSwiper from "../../../utils/VacationSwiper";

const properties = [
  { name: "Hotels", image: "/src/assets/images/hotels2.png" },
  { name: "Apartments", image: "/src/assets/images/apartments.png" },
  { name: "Resorts", image: "/src/assets/images/resorts.png" },
  { name: "Villas", image: "/src/assets/images/villas.png" },
  { name: "Hotels", image: "/src/assets/images/hotels2.png" },
  { name: "Apartments", image: "/src/assets/images/apartments.png" },
  { name: "Resorts", image: "/src/assets/images/resorts.png" },
  { name: "Villas", image: "/src/assets/images/villas.png" },
  { name: "Hotels", image: "/src/assets/images/hotels2.png" },
  { name: "Apartments", image: "/src/assets/images/apartments.png" },
  { name: "Resorts", image: "/src/assets/images/resorts.png" },
  { name: "Villas", image: "/src/assets/images/villas.png" },
  { name: "Hotels", image: "/src/assets/images/hotels2.png" },
  { name: "Apartments", image: "/src/assets/images/apartments.png" },
  { name: "Resorts", image: "/src/assets/images/resorts.png" },
  { name: "Villas", image: "/src/assets/images/villas.png" },
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
