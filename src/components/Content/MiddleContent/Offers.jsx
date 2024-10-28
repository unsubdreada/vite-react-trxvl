import OfferSwiper from "../../../utils/OfferSwiper";
import flightImg from "../../../assets/images/flights.png";
import hotelImg from "../../../assets/images/hotels.png";
import holidayImg from "../../../assets/images/holiday.jpg";
import carImg from "../../../assets/images/cars.jpg";
import cruiseImg from "../../../assets/images/cruise.jpg";
import tourImg from "../../../assets/images/insurance.jpg";

const offers = [
  {
    name: "Domestic Flights",
    text: "Huge savings on flight with trxvl.",
    desc: "Book domestic flights starting @ just 1459",
    image: flightImg,
  },
  {
    name: "International Hotels",
    text: "Enjoy upto 20% off on International Hotels",
    desc: "Make the most of  this deal on your first booking with trxvl.",
    image: hotelImg,
  },
  {
    name: "Holiday Packages",
    text: "Get exciting holiday packages with trxvl.",
    desc: "Explore destinations with holiday packages starting @ just 4999.",
    image: holidayImg,
  },
  {
    name: "Car Rentals",
    text: "Affordable car rentals across the globe.",
    desc: "Rent a car starting from just $19/day with exclusive offers on trxvl.",
    image: carImg,
  },
  {
    name: "Cruise Deals",
    text: "Luxury cruise experiences at unbeatable prices.",
    desc: "Book a cruise vacation starting @ just $299 and explore the seas.",
    image: cruiseImg,
  },
  {
    name: "Travel Insurance",
    text: "Secure your trip with comprehensive travel insurance.",
    desc: "Get peace of mind with travel insurance starting @ just $10.",
    image: tourImg,
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
