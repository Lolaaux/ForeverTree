import Map from "../components/Component/Map";
import StepButtons from "../components/Reusable/StepButtons";

function DonatingStep2() {
  return (
    <div className="flex flex-col w-fit self-center  ">
      <h1 className="text-black font-[500] md:text-4xl text-xl text-center">
        Let's make a difference together
      </h1>
      <h3 className="md:text-xl text-md font-[300] text-center">
        Who will you be donating as? As a/an...
      </h3>

      <Map></Map>
      <StepButtons></StepButtons>
    </div>
  );
}

export default DonatingStep2;
