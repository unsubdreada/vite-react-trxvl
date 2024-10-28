import phoneImg from "../../../assets/images/iphone.png";

function BottomContent() {
  return (
    <div className="flex flex-col pt-32 px-36 font-arimo bg-[url(/src/assets/images/bg_bot.png)] bg-cover">
      <div>
        <img src={phoneImg} />
        <h1>Your all-in-one travel app.</h1>
        <p>
          Book flights, hotels, trains & rental cars anywhere in the world in
          just seconds. Get real-time flight updates, travel info, exclusive
          deals, and 30% more Trip Coins only on the app!
        </p>
      </div>
    </div>
  );
}

export default BottomContent;
