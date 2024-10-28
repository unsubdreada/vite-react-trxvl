import Offers from "./Offers";
import PropertyType from "./PropertyType";
import PlanTrip from "./PlanTrip";
import Community from "./Community";

function MiddleContent() {
  return (
    <div className="flex flex-col mx-36 font-arimo">
      <Offers />
      <PropertyType />
      <PlanTrip />
      <Community />
    </div>
  );
}

export default MiddleContent;
