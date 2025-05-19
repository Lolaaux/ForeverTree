import { useDispatch } from "react-redux";
import { donater, selected } from "/src/Donations/donationSlice.js";
import { useNavigate } from "react-router-dom";

function TxtCard({ heading, sub, buttonTxt }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleInvolvement() {
    dispatch(donater(buttonTxt));
    dispatch(selected(buttonTxt));
    navigate("/donate");
  }
  return (
    <div className="flex lg:w-400 lg:h-[400px] shadow-lg flex-col ">
      <div className="flex flex-col p-5 h-full">
        <h1 className="text-black text-center self-start font-[400] text-2xl pb-5">
          {heading}
        </h1>
        <div className="flex flex-col pb-5">
          <p className="text-[#4B4949]">{sub}</p>
        </div>

        <div className="flex justify-center lg:justify-end items-center lg:items-end h-full">
          <button
            className="flex flex-row self-end group"
            onClick={handleInvolvement}
          >
            <div className="flex gap-3">
              <p className="text-[grey] text-sm whitespace-nowrap underline-offset-[5px] font-[500] group-hover:text-[#454444] underline ">
                Get involved as a/an {buttonTxt}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                fill="grey"
                className="bi bi-arrow-up-right-circle-fill self-start group-hover:fill-[#454444]"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TxtCard;
