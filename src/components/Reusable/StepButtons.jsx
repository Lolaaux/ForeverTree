import { useDispatch } from "react-redux";
import { backStep, nextStep } from "/src/Donations/donationSlice.js";
import Button from "/src/components/Reusable/Button.jsx";

function StepButtons() {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row self-center justify-between gap-10">
      <Button
        handleClick={() => dispatch(backStep())}
        color="#adb5bd"
        weight="400"
        hoverColor="#6c757d"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="white"
          className="bi bi-arrow-left-short"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
          />
        </svg>
        Back
      </Button>
      <Button
        weight="500"
        color="#247401"
        hoverColor="#005c00"
        handleClick={() => dispatch(nextStep())}
      >
        Next
      </Button>
    </div>
  );
}

export default StepButtons;
