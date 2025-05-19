import signInImg from "../assets/img/signin.jpg";
import { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import { useDispatch, useSelector } from "react-redux";
import { resetCheckout, userData } from "/src/Donations/donationSlice.js";
import UserHistory from "./UserHistory";
import Header from "../components/Reusable/Header";
import Button from "../components/Reusable/Button";
import GoogleIcon from "/src/assets/img/googleLogo.png";

function SigninPage() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  const storeState = useSelector((store) => store.donate);
  const dispatch = useDispatch();

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
    });

    return () => subscription?.unsubscribe();
  }, []);

  useEffect(() => {
    const fetchUserDonations = async () => {
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) {
        console.error("Error getting session:", sessionError);
        return;
      }

      const userId = session?.user?.id;
      if (!userId) {
        console.warn("No user is logged in");
        return;
      }

      const { data, error } = await supabase
        .from("UserDonations")
        .select("*")
        .eq("user_id", userId);

      if (error) {
        console.error("Error fetching user donations:", error.message);
      } else {
        dispatch(userData(data));
        setLoading(true);
      }
    };

    fetchUserDonations();
  }, [dispatch]);

  const signUp = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            prompt: "select_account",
          },
        },
      });
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Error logging out:", error.message);
    else {
      dispatch(resetCheckout());
    }
  };

  return (
    <>
      <Header></Header>
      <div className="h-[100vh] w-[100vw] flex md:flex-row flex-col gap-5 ">
        {!session ? (
          <>
            <div
              className="w-full h-full flex flex-col justify-start items-center"
              style={{
                backgroundImage: `url(${signInImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex flex-col justify-center items-center w-[100%] gap-2 pb-10">
              <div className="flex flex-row gap-5 justify-center items-center">
                <img src={GoogleIcon} alt="Google logo" className="w-10 h-10" />
                <h1 className="text-black text-[40px]">Log in</h1>
              </div>
              <Button
                weight="400"
                color="#247401"
                hoverColor="#005c00"
                handleClick={signUp}
              >
                Login with Google
              </Button>
            </div>
          </>
        ) : (
          <UserHistory
            session={session}
            handleLogout={handleLogout}
            storeState={storeState}
            loading={loading}
          ></UserHistory>
        )}
      </div>
    </>
  );
}

export default SigninPage;
