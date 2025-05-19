import LandingContent from "../components/Component/LandingContent";
import InfoHeader from "../components/Reusable/InfoHeader";
import Statistics from "../components/Component/Statistics";
import LearnMore from "../components/Component/LearnMore";
import InvolvedContent from "../components/Component/InvolvedContent";
import FAQ from "../components/Component/FAQ";
import ChoosingUs from "../components/Component/ChoosingUs";
import Footer from "../components/Component/Footer";
import Header from "../components/Reusable/Header";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div>
        <LandingContent />
        <InfoHeader info="Growing a brighter future together"></InfoHeader>
        <Statistics></Statistics>
        <LearnMore></LearnMore>
        <InfoHeader info="Parnterships"></InfoHeader>
        <InvolvedContent></InvolvedContent>
        <ChoosingUs />
        <FAQ></FAQ>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default HomePage;
