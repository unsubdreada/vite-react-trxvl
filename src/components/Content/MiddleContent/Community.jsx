import CommunititySwiper from "../../../utils/CommunitySwiper";
import indiaImg from "../../../assets/images/india.png";
import travelTalkImg from "../../../assets/images/travel_talk.png";
import beachImg from "../../../assets/images/beach.png";
import mountainsImg from "../../../assets/images/mountains.png";

const communities = [
  {
    name: "India",
    type: "Travel Community",
    subscribers: "155,073",
    image: indiaImg,
  },
  {
    name: "Travel Talk",
    type: "Travel Community",
    subscribers: "155,073",
    image: travelTalkImg,
  },
  {
    name: "Beach",
    type: "Travel Community",
    subscribers: "155,073",
    image: beachImg,
  },
  {
    name: "Mountains",
    type: "Travel Community",
    subscribers: "155,073",
    image: mountainsImg,
  },
  {
    name: "India",
    type: "Travel Community",
    subscribers: "155,073",
    image: indiaImg,
  },
  {
    name: "Travel Talk",
    type: "Travel Community",
    subscribers: "155,073",
    image: travelTalkImg,
  },
  {
    name: "Beach",
    type: "Travel Community",
    subscribers: "155,073",
    image: beachImg,
  },
  {
    name: "Mountains",
    type: "Travel Community",
    subscribers: "155,073",
    image: mountainsImg,
  },
];

function Community() {
  return (
    <div className="mt-16">
      <h1 className="font-bold text-4xl text-black">
        Connect with other travelers in our community
      </h1>
      <CommunititySwiper items={communities} />
    </div>
  );
}

export default Community;
