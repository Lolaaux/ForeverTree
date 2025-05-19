import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../services/supabaseClient";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetCheckout, counter } from "/src/Donations/donationSlice.js";
import Logo2 from "/src/assets/img/Logo2.png";

function CheckOutPage() {
  const donatingState = useSelector((store) => store.donate);
  const [session, setSession] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session === null) return;
    if (!session || !donatingState.checkout) {
      navigate("/");
    }
  }, [session, donatingState.checkout, navigate]);
  useEffect(() => {
    if (!donatingState.checkout) return;

    if (donatingState.checkout === true) {
      const interval = setInterval(() => {
        dispatch(counter());
      }, 1000);

      const timeout = setTimeout(() => {
        navigate("/");
        dispatch(resetCheckout());
      }, 4000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [donatingState.checkout, dispatch, navigate]);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        createData(session);
      }
    });

    return () => subscription?.unsubscribe();
  }, []);

  const createData = async (session) => {
    if (session && donatingState.checkout) {
      const { data, error } = await supabase
        .from("UserDonations")
        .insert({
          user_id: session.user.id,
          donater: JSON.stringify(donatingState.donater),
          payment: JSON.stringify(donatingState.payment),
          donatingTo: JSON.stringify(donatingState.donatingTo),
          donatingAmount: donatingState.donatingAmount,
        })
        .single();

      if (error) {
        console.error("Error inserting user data:", error.message);
        return;
      }
    }
  };
  if (!session || !donatingState.checkout) return null;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <img src={Logo2} alt="Forevertree logo" className="w-60 md:w-100" />
      <h1 className="text-black text-2xl font-[500]">
        Thank you for donating €{donatingState.donatingAmount} to{" "}
        {donatingState.donatingTo}!
      </h1>
      <p className="text-black">
        You will be redirected in: {donatingState.counter}
      </p>
    </div>
  );
}

export default CheckOutPage;
