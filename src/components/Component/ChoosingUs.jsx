import Card from "../Reusable/card";
import location from "/src/assets/img/location.png";
import molecule from "/src/assets/img/molecule.png";
import loop from "/src/assets/img/loop.png";
import InfoHeader from "../Reusable/InfoHeader";
import ChooseUs from "/src/assets/img/chooseus.jpg";

function ChoosingUs() {
  return (
    <div className="flex flex-col gap-5 h-auto">
      <InfoHeader info="Why choose us"></InfoHeader>
      <div
        style={{
          backgroundImage: `url(${ChooseUs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`flex justify-center items-center min-h-[400px] md:min-h-[500px]`}
      >
        <div className="flex flex-col justify-center items-center text-center gap-2">
          <h1
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}
            className="md:text-[60px] text-[35px] font-[400] text-white self-center "
          >
            Over 10 EU Partnerships
          </h1>
          <p
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}
            className="md:w-[700px]  w-[300px] font-[300] text-white  md:text-[20px] "
          >
            With partnerships across 10+ countries—including Germany, Poland,
            Norway,and many more—we’re dedicated to restoring ecosystems and
            creating a greener future for generations to flourish.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center gap-20 h-auto  ">
        <Card
          image={location}
          title="Locally-Led Projects"
          text="We work hand-in-hand with local communities across Europe to ensure every tree planted thrives and creates long-term impact."
        />
        <Card
          image={loop}
          title="Maximizing Every Contribution"
          text="Our collaborative model reduces costs and increases efficiency—so more resources go directly into the ground, where they matter most."
        />
        <Card
          image={molecule}
          title="Science-Backed Reforestation"
          text="Our methods are rooted in ecological science, ensuring biodiversity restoration—not just tree counts."
        />
      </div>
    </div>
  );
}

export default ChoosingUs;
