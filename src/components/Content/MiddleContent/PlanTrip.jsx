function PlanTrip() {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <div className="bg-[url(/src/assets/images/plan.png)] rounded-2xl bg-cover bg-center h-[350px] w-full flex items-center p-8">
        <div className="text-white w-full max-w-3xl">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
            Plan your trip with travel expert
          </h1>
          <p className="text-2xl md:text-2xl mt-4">
            Our professional advisors can craft your perfect itinerary
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlanTrip;
