import { useState } from "react";

function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <div className={`flex flex-col h-auto px-2 mt-20 w-auto gap-5 `}>
      <div className="flex flex-col p-5 gap-5 bg-[#173008] rounded-[20px] ">
        <h1 className="md:text-[30px] text-[20px] font-[300] text-white">
          Subscribe to recieve weekly updates on our journey.
        </h1>{" "}
        <p className="md:text-[20px] text-sm  text-white">
          *By signing up, you agree to receive our weekly email newsletter. We
          value your privacy and will handle your information in accordance with
          our Privacy Policy. You can unsubscribe at any time by following the
          link in our emails.
        </p>
        {!subscribed ? (
          <form
            className="flex md:flex-row gap-5 flex-col"
            onSubmit={() => setSubscribed(true)}
          >
            <input
              type="text"
              placeholder="Email"
              className="bg-[#e9ecef] rounded-[5px] pl-4 p-2 w-auto"
              required
            ></input>
            <button className="border-2 p-2 rounded-[8px] hover:bg-[white] hover:text-black hover:border-white">
              Subscribe
            </button>
          </form>
        ) : (
          <p>Thankyou for subscribing!</p>
        )}
        <div className="flex md:flex-row justify-between flex-col">
          {" "}
          <div className="flex md:flex-row flex-col gap-5 justify-end items-endd">
            <p className="text-white">email: forevertree@example.com</p>
            <p className="text-white">tel: (555) 123-4567</p>
          </div>
          <nav className="flex ">
            <ul className="underline text-white ">
              <a href="">Privacy Policy</a>
            </ul>
          </nav>{" "}
        </div>
      </div>
      <footer className="whitespace-nowrap  self-center font-[300] ">
        © ForeverTree. All rights reserved.
      </footer>
    </div>
  );
}

export default Footer;
