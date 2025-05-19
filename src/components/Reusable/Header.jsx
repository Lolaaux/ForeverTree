import { useState } from "react";
import Logo from "/src/assets/img/Logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className={`sticky top-0 z-50 w-full flex justify-between header `}>
      <div className="flex items-center justify-between px-2">
        <button>
          <img
            src={Logo}
            alt="ForeverTree Logo"
            className="h-8"
            onClick={() => navigate("/")}
          />
        </button>
      </div>
      <div className="flex">
        <button
          className="self-center z-50 relative flex flex-row"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            fill={!isOpen ? "white" : "black"}
            className="bi bi-justify"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        <nav
          className={`fixed top-0 right-0 h-full w-54 bg-white text-black flex flex-col justify-between p-8 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-2 pt-[100px]`}
        >
          <div className="flex flex-col items-end gap-4">
            <a href="/about" className="sideNav sideNav:hover ">
              About us
            </a>
            <a href="/about" className="sideNav sideNav:hover ">
              Our Mission
            </a>
            <a className="sideNav sideNav:hover " href="/our-work">
              Our Work
            </a>
            <a href="/about" className="sideNav sideNav:hover ">
              Our Community
            </a>
            <a href="/about" className="sideNav sideNav:hover ">
              Volunteering
            </a>
          </div>
          <div className="flex flex-col gap-2 items-center ">
            <a href="">
              <p className="text-black text-[15px] underline font-[500]">
                forevertree@example.com
              </p>
            </a>

            <p className="text-black text-[15px] font-[500]">(555) 123-4567</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
