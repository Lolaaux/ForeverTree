import About from "../assets/img/WorkImg/work2.jpg";
import work3 from "../assets/img/WorkImg/work3.jpg";
import work1 from "../assets/img/WorkImg/work1.jpg";
import work4 from "../assets/img/WorkImg/work4.jpg";
import work5 from "../assets/img/WorkImg/work5.jpg";
import work6 from "../assets/img/WorkImg/work6.jpg";
import Header from "../components/Reusable/Header";
import { useNavigate } from "react-router-dom";
import WorkInfoTxt from "../components/Reusable/WorkInfoTxt";

const WorkInfo = [
  {
    title: "Alphine ReLeaf - Swiss high-elevation planting",
    place: "📍 Switzerland | 📅 May 2025 –",
    info: "Introducing climate-adaptive tree species to protect fragile Alpine slopes from erosion and create future-resilient forest corridors.",
  },
  {
    title: "MediterranGreen - Reforesting fire-stricken landscapes",
    place: "📍 Greece | 📅 June April 2023 – March 2024",
    info: "Restoring biodiversity in areas devastated by wildfires by planting drought-resistant native trees to stabilize soil and support wildlife return.",
  },
  {
    title: "Sierra Verde - Regreening arid zones",
    place: "📍 Spain | 📅 July March 2023 – December 2024",
    info: "Combating desertification in southern Spain by planting hardy native species that thrive in dry conditions and enrich depleted soils.",
  },
  {
    title: "WildBloom Baltics – Reviving Estonia’s forest biodiversity",
    place: "📍 Estonia | 📅 August 2025 –",
    info: "Restoring native forest habitats to support keystone species like the moose, while planting diverse tree types that enrich ecosystem health and resilience.",
  },
];

function WorkPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <div className="flex flex-col w-full h-full ">
        <div className="flex flex-col p-8 w-[100vw] md:w-[70vw] gap-2">
          {" "}
          <h3 className="text-[30px] md:text-[60px] font-[500]">
            Restoring Ecosystems & Biodiversity
          </h3>{" "}
          <p className="md:text-[20px] text-black">
            {" "}
            Our tree planting efforts are carefully designed to bring back
            native species, restore soil health, and rebuild habitats for
            wildlife. From bees to birds, we aim to create a thriving and
            balanced natural environment.
          </p>
        </div>
        <div
          className="relative w-screen min-h-[calc(30vh+125px)] bg-cover pb-20"
          style={{
            backgroundImage: `url(${About})`,
            backgroundPosition: "center 30%",
          }}
        >
          <div className="flex justify-center items-center absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] md:w-[200px] md:h-[200px] rounded-full bg-[white]">
            <button
              className="bg-[green] w-[175px] h-[175px] rounded-full hover:scale-[0.9] transition duration-300 ease-in-out text-[25px]"
              onClick={() => navigate("/about")}
            >
              Get Involved
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[100vw] pt-20 gap-5 ">
          <p className="about-navTxt px-8">Our work</p>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src={`${work3}`}
              className="w-full h-full md:w-[40vh] lg:w-[50vw]"
            />
            <WorkInfoTxt
              title={WorkInfo[0].title}
              place={WorkInfo[0].place}
              info={WorkInfo[0].info}
            ></WorkInfoTxt>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center ">
            <img
              src={`${work5}`}
              className="w-full h-full  md:w-[40vh] lg:w-[50vw] "
            />
            <WorkInfoTxt
              title={WorkInfo[1].title}
              place={WorkInfo[1].place}
              info={WorkInfo[1].info}
            ></WorkInfoTxt>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src={`${work4}`}
              className="w-full h-full  md:w-[40vh] lg:w-[50vw] object-center"
            />
            <WorkInfoTxt
              title={WorkInfo[2].title}
              place={WorkInfo[2].place}
              info={WorkInfo[2].info}
            ></WorkInfoTxt>
          </div>{" "}
          <div className="flex flex-col md:flex-row gap-8 items-center ">
            <img
              src={`${work1}`}
              className="w-full h-full  md:w-[40vh] lg:w-[50vw]"
            />
            <WorkInfoTxt
              title={WorkInfo[3].title}
              place={WorkInfo[3].place}
              info={WorkInfo[3].info}
            ></WorkInfoTxt>
          </div>{" "}
          <div
            className="w-full h-[10vh] md:h-[20vh] mt-10 "
            style={{
              backgroundImage: `url(${work6})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default WorkPage;
