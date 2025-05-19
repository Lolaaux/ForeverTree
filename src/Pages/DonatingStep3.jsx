import AmountCard from "../components/Reusable/AmountCard";
import { useDispatch, useSelector } from "react-redux";
import {
  backStep,
  amount,
  paymentType,
  selected,
  checkout,
} from "../Donations/donationSlice";
import CardButton from "../components/Reusable/CardButton";
import Button from "../components/Reusable/Button";
import { useState } from "react";

function DonatingStep3() {
  const dispatch = useDispatch();
  const donatingState = useSelector((store) => store.donate);
  const [amountInput, setAmountInput] = useState(donatingState.amount);

  function handlePaymentType(type) {
    dispatch(paymentType(type));
    dispatch(selected(type));
  }

  function handleCheckOutStatus() {
    if (
      donatingState.donater === null ||
      donatingState.donatingTo === null ||
      donatingState.donatingAmount === 0 ||
      donatingState.payment === null
    ) {
      dispatch(checkout(false));
    } else {
      dispatch(checkout(true));
    }
  }

  function handleAmountInput(e) {
    const inputValue = e.target.value;

    setAmountInput(inputValue);

    if (donatingState.selected) {
      dispatch(selected(false));
    }

    dispatch(amount(inputValue));
  }

  return (
    <div className="flex flex-col px-2">
      {" "}
      <div className="flex flex-col col-span-3 gap-2 md:w-fit w-[300px] self-center">
        <h1 className="text-black font-[500] md:text-4xl text-xl text-left">
          With your help we can restore forests.
        </h1>
        <h3 className="md:text-xl text-md font-[300]">
          Please fill out the form.
        </h3>
        <div className="flex flex-col gap-8 text-lg">
          <p className="text-black ">How often do you want to pay?</p>
        </div>
        <div className="flex flex-col gap-2">
          {" "}
          <CardButton
            txt="one-way"
            select={() => handlePaymentType("one-way")}
          ></CardButton>
          <CardButton
            txt="monthly"
            select={() => handlePaymentType("monthly")}
          ></CardButton>
          <CardButton
            txt="yearly"
            select={() => handlePaymentType("yearly")}
          ></CardButton>
        </div>
        <div className="flex flex-col gap-4 pb-8">
          {" "}
          <p className="text-black text-lg">
            How much would you like to donate?
          </p>
          <div className="flex gap-2 flex-wrap">
            <AmountCard
              value={10}
              handleClick={() => {
                dispatch(amount(10));
                setAmountInput("");
              }}
            >
              €10
            </AmountCard>
            <AmountCard
              value={20}
              handleClick={() => {
                dispatch(amount(20));
                setAmountInput("");
              }}
            >
              €20
            </AmountCard>
            <AmountCard
              value={35}
              handleClick={() => {
                dispatch(amount(35));
                setAmountInput("");
              }}
            >
              €35
            </AmountCard>
            <AmountCard
              value={50}
              handleClick={() => {
                dispatch(amount(50));
                setAmountInput("");
              }}
            >
              €50
            </AmountCard>
            <AmountCard
              value={100}
              handleClick={() => {
                dispatch(amount(100));
                setAmountInput("");
              }}
            >
              €100
            </AmountCard>
            <input
              placeholder="other"
              value={amountInput}
              className="border border-[1px] rounded-[10px] w-20 focus:placeholder-transparent placeholder:text-center text-center placeholder:font-[400]"
              onChange={(e) => handleAmountInput(e)}
            ></input>
          </div>
        </div>
        <div className="flex flex-row self-center gap-5">
          <Button
            handleClick={() => dispatch(backStep())}
            weight="200"
            color="#adb5bd"
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
            back
          </Button>
          <Button
            weight="500"
            handleClick={handleCheckOutStatus}
            color="#247401"
            hoverColor="#005c00"
          >
            CheckOut
          </Button>
        </div>
      </div>{" "}
    </div>
  );
}

export default DonatingStep3;
