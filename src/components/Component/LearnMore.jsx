import LearnMoreImg from "/src/assets/img/learnMoreImg.jpg";
import Button from "../Reusable/Button";
import { useNavigate } from "react-router-dom";

export default function LearnMore() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center md:flex-row  gap-10 md:gap-35 md:mb-10">
      <div className="flex flex-col md:items-center items-start gap-2 order-2 md:order-1 md:w-120 w-90 px-10 ">
        <h1 className="text-black font-[500] md:text-[40px] text-[25px]">
          Reviving Ecosystems, supporting Communities
        </h1>
        <p className="text-black">
          Through our tree planting initiatives, we are revitalizing ecosystems
          and supporting local communities across Europe. These efforts promote
          sustainable environmental practices and enhance biodiversity.
        </p>
        <div className="flex flex-row self-start mt-7 ">
          <Button
            weight="300"
            color="#247401"
            hoverColor="#004b23"
            handleClick={() => navigate("./our-work")}
          >
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="white"
              className="bi bi-arrow-right-short self-center ml-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </Button>{" "}
        </div>
      </div>
      <div
        className="rounded-tl-[100px] rounded-br-[100px] md:h-[450px] md:w-[500px] w-[300px] h-[300px] order-1 md:order-1 "
        style={{
          background: `URL(${LearnMoreImg})`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}
