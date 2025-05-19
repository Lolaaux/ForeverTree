import { useSelector } from "react-redux";

function AmountCard({ children, handleClick, value }) {
  const store = useSelector((store) => store.donate).donatingAmount;
  const isSelected = store === value;

  return (
    <button
      onClick={handleClick}
      className="rounded-[10px] w-15 h-12"
      style={
        isSelected
          ? { backgroundColor: "#3CC900" }
          : { backgroundColor: "#247401" }
      }
    >
      <div className="flex flex-row justify-center items-center font-[500]">
        {children}
      </div>
    </button>
  );
}

export default AmountCard;
