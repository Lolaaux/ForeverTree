import team5 from "../assets/img/TeamImg/team5.jpg";
import team1 from "../assets/img/TeamImg/team1.jpg";
import team2 from "../assets/img/TeamImg/team2.jpg";
import team3 from "../assets/img/TeamImg/team3.jpg";
import team4 from "../assets/img/TeamImg/team4.jpg";
import team7 from "../assets/img/TeamImg/team7.jpg";
import about1 from "../assets/img/aboutImg/about-1.jpg";
import TeamCards from "../components/Reusable/TeamCards";
import Footer from "../components/Component/Footer";
import Header from "../components/Reusable/Header";

const aboutTxt =
  "Founded in 2019, Forever Tree is a tree-focused charity committed to long-term environmental restoration through strategic reforestation.What began as a small initiative driven by a deep respect for nature has since grown into a mission-driven organization dedicated to restoring ecosystems, reducing carbon impact, and creating greener futures. ";

function AboutPage() {
  return (
    <>
      <Header></Header>

      <div className="flex flex-col col-span-3 w-full md:px-10 px-2 py-10 gap-10 ">
        <div className="flex flex-col  w-full  rounded-[15px] p-5">
          <p className="about-navTxt">About us</p>
          <h3 className="font-[500] text-[1.5rem] lg:text-[30px]">
            {aboutTxt}
          </h3>
          <p className="about-navTxt py-4 ">Meet our team</p>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start gap-2">
            <TeamCards img={team5} txt="Founder/CEO"></TeamCards>
            <TeamCards img={team1} txt="Executive Director"></TeamCards>
            <TeamCards img={team2} txt="Director of Operations"></TeamCards>
            <TeamCards img={team3} txt="Director of Programs"></TeamCards>
            <TeamCards img={team4} txt="Communications Director"></TeamCards>
            <TeamCards img={team7} txt="Outreach Director"></TeamCards>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="flex flex-col">
            <p className="about-navTxt py-5">Our mission</p>
            <p className="whitespace-pre-line text-black">
              We identify deforested and degraded lands across Europe and
              restore them through strategic tree planting initiatives.
              <br />
              <br />
              Every tree we plant absorbs carbon, combats erosion, and helps
              reverse the effects of climate change.We work with local farmers,
              landowners, and community members to create long-term employment
              and support green livelihoods. Our efforts ensure that
              reforestation is both socially and economically sustainable.
            </p>
          </div>{" "}
          <img src={about1} className="w-full lg:w-[50vw] rounded-[8px]" />
        </div>

        <div className="flex flex-col md:flex-row pt-20 w-full justify-between gap-10">
          <div className="flex flex-col w-full pt-8">
            <p className="about-navTxt py-5">Our community</p>
            <h3 className="font-[500] text-[1.5rem] lg:text-[30px] pb-5 ">
              ForeverTree is built on people—those who care deeply about the
              planet and want to make a real difference.
            </h3>
            <p className="text-black pb-10 md:pb-0">
              Through the tireless efforts of our volunteers, we’ve been able to
              reach incredible milestones. Since the inception of our
              reforestation programs, thousands of trees have been planted in
              degraded forests across Europe
            </p>{" "}
            <div className="flex flex-col gap-5 pt-5"></div>
            <p className="about-navTxt py-5 ">
              Why Volunteer & getting involved
            </p>
            <p className="text-black w-[100vw]">
              Volunteering with Forever Tree isn’t just about giving your
              time—it’s about being part of something that leaves a lasting
              impact on both the environment and the communities we serve. When
              you volunteer with us, you become a key player in restoring
              ecosystems, revitalizing local communities, and working toward a
              more sustainable future.
            </p>{" "}
            <p className="text-black pt-10 font-[600]">
              For Volunteer oppurtunies, please contact us via email:
              joinftree@example.com
            </p>
            <div className="flex flex-col pt-5 gap-2 ">
              <p className="font-[500] text-black"> 📆 Spring-Fall</p>
              <ul className="list-disc pl-5">
                <li>Tree Planting & Reforestation </li>
              </ul>
            </div>
            <div className="flex flex-col pt-5 gap-2 ">
              <p className="font-[500] text-black">
                {" "}
                📆 Year-round (with peak activities in Spring and Fall)
              </p>
              <ul className="list-disc pl-5">
                <li>Forest Cleanup & Conservation</li>
                <li>Community Outreach & Educational Programs</li>
              </ul>
            </div>
            <div className="flex flex-col pt-5 gap-2">
              <p className="font-[500] text-black"> 📆 Spring - Summer </p>
              <ul className="list-disc pl-5">
                <li>Forest Restoration & Habitat Enhancement</li>
              </ul>
            </div>
          </div>{" "}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default AboutPage;
