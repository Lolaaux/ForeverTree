import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CheckOutStatus() {
  const donatingState = useSelector((store) => store.donate);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (donatingState.checkout === true) {
      const timeoutId = setTimeout(() => {
        navigate("/checkout");
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [donatingState.checkout, dispatch, navigate]);

  if (donatingState.checkout === true) {
    return (
      <div className="absolute top-5 right-5 bg-[green] p-6 rounded-[8px] w-[260px] text-move-side">
        <p className="text-white text-lg">Donation successful.</p>
      </div>
    );
  } else {
    return (
      <div className="absolute top-5 right-5 bg-[red] p-6 rounded-[8px] w-[260px] text-move-side">
        <p className="text-white text-lg">Please fill out the entire form.</p>
      </div>
    );
  }
}

export default CheckOutStatus;
