import CardButton from "../components/Reusable/CardButton";
import Person from "/src/assets/svg/Person.svg";
import Company from "/src/assets/svg/Company.svg";
import School from "/src/assets/svg/School.svg";
import { donater, selected } from "../Donations/donationSlice";
import { useDispatch } from "react-redux";
import StepButtons from "../components/Reusable/StepButtons";

function DonatingStep1() {
  const dispatch = useDispatch();

  function handleDonater(type) {
    dispatch(selected(type));
    dispatch(donater(type));
  }

  return (
    <>
      {" "}
      <div className="flex flex-col h-20 gap-2 w-fit self-center  ">
        <h1 className="text-black font-[500] md:text-4xl text-xl text-center">
          Let's make a difference together
        </h1>
        <h3 className="md:text-xl text-md font-[300]">
          Who will you be donating as? As a/an...
        </h3>
      </div>
      <div className="flex  flex-col gap-2 justify-center items-center md:gap-3 px-6 p-8 rounded-[10px]">
        <CardButton txt="Individual" select={() => handleDonater("Individual")}>
          <div className="h-auto self-center">
            <img src={Person} alt="Person icon" />
          </div>
        </CardButton>{" "}
        <CardButton txt="Company" select={() => handleDonater("Company")}>
          <div className="h-auto self-center">
            <img src={Company} alt="People icon" />
          </div>
        </CardButton>
        <CardButton txt="School" select={() => handleDonater("School")}>
          {" "}
          <div className="h-auto self-center">
            <img src={School} alt="School icon" />
          </div>
        </CardButton>
      </div>
      <StepButtons></StepButtons>
    </>
  );
}

export default DonatingStep1;
