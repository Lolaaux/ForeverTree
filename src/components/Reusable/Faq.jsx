import { useState } from "react";

function Faq({ question, answer }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className={` flex flex-col h-full w-[100vw] justify-center 
     `}
    >
      <button
        onClick={() => setClicked(!clicked)}
        className="flex flex-row justify-between"
      >
        <div className="flex flex-row w-[95%] justify-between items-center">
          {" "}
          <p
            className="text-black md:mx-[5%] self-start md:whitespace-nowrap p-2 px-5 text-left "
            style={clicked ? { fontWeight: "600" } : null}
          >
            {question}
          </p>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            className="bi bi-caret-down-fill w-4 h-4 min-w-4 min-h-4"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
      </button>
      {clicked ? (
        <p className="text-black md:px-20 px-7 mt-2 pb-5 ">{answer}</p>
      ) : null}
      <hr className="border-0.5 border-[#A4A2A2] w-[90%] self-center"></hr>
    </div>
  );
}

export default Faq;
