import OfferSwiper from "../../../utils/OfferSwiper";

const offers = [
  {
    name: "Domestic Flights",
    text: "Huge savings on flight with trxvl.",
    desc: "Book domestic flights starting @ just 1459",
    image: "/src/assets/images/flights.png",
  },
  {
    name: "International Hotels",
    text: "Enjoy upto 20% off on International Hotels",
    desc: "Make the most of  this deal on your first booking with trxvl.",
    image: "/src/assets/images/hotels.png",
  },
  {
    name: "Holiday Packages",
    text: "Get exciting holiday packages with trxvl.",
    desc: "Explore destinations with holiday packages starting @ just 4999.",
    image: "/src/assets/images/holiday.jpg",
  },
  {
    name: "Car Rentals",
    text: "Affordable car rentals across the globe.",
    desc: "Rent a car starting from just $19/day with exclusive offers on trxvl.",
    image: "/src/assets/images/cars.jpg",
  },
  {
    name: "Cruise Deals",
    text: "Luxury cruise experiences at unbeatable prices.",
    desc: "Book a cruise vacation starting @ just $299 and explore the seas.",
    image: "/src/assets/images/cruise.jpg",
  },
  {
    name: "Travel Insurance",
    text: "Secure your trip with comprehensive travel insurance.",
    desc: "Get peace of mind with travel insurance starting @ just $10.",
    image: "/src/assets/images/insurance.jpg",
  },
];

function Offers() {
  return (
    <div className="mt-20">
      <h1 className="font-bold text-4xl text-black">Offers</h1>
      <div>
        <OfferSwiper items={offers} />
      </div>
    </div>
  );
}

export default Offers;
