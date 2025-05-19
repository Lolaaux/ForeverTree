import { useDispatch, useSelector } from "react-redux";

function CardButton({ txt, children, select }) {
  const dispatch = useDispatch();
  const { selected: currentSelected } = useSelector((store) => store.donate);

  function handleClick() {
    dispatch(select(txt));
  }
  return (
    <div className="flex justify-center items-center w-[300px] md:w-[500px] ">
      {" "}
      <button
        style={
          currentSelected === txt
            ? {
                border: "2px solid rgb(77, 255, 0)",
              }
            : null
        }
        onClick={handleClick}
        className={`flex gap-5 px-8 w-full h-20 rounded-[8px] border-1 border-[#dee2e6] md:h-25 hover:translate-y-[-5px]`}
      >
        {children}
        <p className="text-black self-center md:text-xl whitespace-nowrap ">
          {txt}
        </p>
      </button>
    </div>
  );
}

export default CardButton;
