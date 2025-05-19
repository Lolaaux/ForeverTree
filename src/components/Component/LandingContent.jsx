import { useNavigate } from "react-router-dom";
import Button from "../Reusable/Button";
import { supabase } from "/src/services/supabaseClient.js";
import { useState } from "react";

function LandingContent() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  async function checkUser() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      setLoggedIn(true);
    } else {
      null;
    }
  }
  checkUser();

  return (
    <div className="flex flex-col w-full justify-center bg-homeImg min-h-screen">
      <div className="flex flex-col items-center justify-center h-full text-move gap-8">
        <div className="flex flex-col items-center">
          <h1 className="text-[35px] md:text-[60px] font-[500] text-[white] text-center">
            We don’t just plant trees — <br></br> we restore nature.
          </h1>

          <p className="text-[15px] md:w-[50vw] md:text-[20px] text-[white] font-[300] text-center">
            Every tree planted makes a difference. Help us combat climate
            change, restore forests by supporting our reforestation efforts.
          </p>
        </div>

        <div className="flex flex-row justify-center gap-[30px]">
          <Button
            weight="400"
            color="#247401"
            hoverColor="#005c00"
            handleClick={() => navigate("/donate")}
          >
            Donate
          </Button>
          <button
            className="border-2 border-white p-2 px-4 font-[500] rounded-[8px] hover:bg-[white] hover:text-[black]"
            onClick={() => navigate("/signin")}
          >
            {loggedIn ? "My profile" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingContent;
