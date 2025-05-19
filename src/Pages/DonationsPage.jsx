import Steps from "../components/Reusable/Steps";
import { useDispatch, useSelector } from "react-redux";
import DonatingStep1 from "./DonatingStep1";
import DonatingStep2 from "./DonatingStep2";
import DonatingStep3 from "./DonatingStep3";
import { useNavigate } from "react-router-dom";
import { nextStep } from "../Donations/donationSlice";
import { useEffect, useState } from "react";
import CheckOutStatus from "../components/Component/CheckOutStatus";
import { supabase } from "/src/services/supabaseClient.js";
import Header from "../components/Reusable/Header";

function DonationsPage() {
  const [session, setSession] = useState(null);

  const { step: currentStep } = useSelector((store) => store.donate);
  const donateState = useSelector((store) => store.donate);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentStep === 0) {
      dispatch(nextStep());
      navigate("/");
    }
  }, [currentStep, dispatch, navigate]);
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      try {
        if (data?.session) {
          setSession(data.session);
        } else {
          setSession(null);
        }
      } catch (err) {
        console.log("There was an error", err.message);
      }
    };

    checkSession();
  }, []);

  if (session) {
    return (
      <div className="grid grid-cols-3 place-items-center w-full h-full ">
        <div className="md:shadow-xl col-span-3 w-[800px] md:h-fit pb-5 ">
          {donateState.checkout !== null && <CheckOutStatus />}
          <div className="flex flex-col col-span-3 gap-4">
            <div className="flex flex-row justify-center w-full ">
              <div className="flex col-span-3 ">
                <Steps
                  step="1"
                  fillColor={currentStep === 1 ? "#3CC900" : "#BBBBBB"}
                />
                <Steps
                  step="2"
                  fillColor={currentStep === 2 ? "#3CC900" : "#BBBBBB"}
                />
                <Steps
                  step="3"
                  fillColor={currentStep === 3 ? "#3CC900" : "#BBBBBB"}
                />{" "}
              </div>
            </div>

            <div className="flex flex-col col-span-3 ">
              {currentStep === 1 ? (
                <DonatingStep1 />
              ) : currentStep === 2 ? (
                <DonatingStep2 />
              ) : currentStep === 3 ? (
                <DonatingStep3 />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col ">
        <Header></Header>
        <div className="flex flex-col w-fit p-5 gap-4">
          {" "}
          <h1 className="text-black text-[30px] ">
            Users must be signed in to make donations.
          </h1>
          <button
            className="w-[80px] border-2 border-black p-2 font-[500] rounded-[8px] text-black hover:bg-[#247401] hover:border-none hover:text-white"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </button>
        </div>
      </div>
    );
  }
}

export default DonationsPage;
