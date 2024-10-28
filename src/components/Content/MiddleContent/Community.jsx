import CommunititySwiper from "../../../utils/CommunitySwiper";

const communities = [
  {
    name: "India",
    type: "Travel Community",
    subscribers: "155,073",
    image: "/src/assets/images/india.png",
  },
  {
    name: "Travel Talk",
    type: "Travel Community",
    subscribers: "155,073",
    image: "/src/assets/images/travel_talk.png",
  },
  {
    name: "Beach",
    type: "Travel Community",
    subscribers: "155,073",
    image: "/src/assets/images/beach.png",
  },
  {
    name: "Mountains",
    type: "Travel Community",
    subscribers: "155,073",
    image: "/src/assets/images/mountains.png",
  },
  {
    name: "India",
    type: "Travel Community",
    subscribers: "155,073",
    image: "/src/assets/images/india.png",
  },
  {
    name: "Travel Talk",
    type: "Travel Community",
    subscribers: "155,073",
    image: "/src/assets/images/travel_talk.png",
  },
  {
    name: "Beach",
    type: "Travel Community",
    subscribers: "155,073",
    image: "/src/assets/images/beach.png",
  },
  {
    name: "Mountains",
    type: "Travel Community",
    subscribers: "155,073",
    image: "/src/assets/images/mountains.png",
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
