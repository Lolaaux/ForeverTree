import TxtCard from "/src/components/Reusable/TxtCard.jsx";
function InvolvedContent() {
  return (
    <div className="flex flex-col h-fit p-8 lg:flex-row ">
      <TxtCard
        heading="Individual"
        sub="Join our community of nature-lovers and take part in tree planting, fundraising, and spreading awareness. Whether it’s donating, volunteering, or simply sharing our mission, every step counts."
        buttonTxt="Individual"
      ></TxtCard>
      <TxtCard
        heading="Company"
        sub="Partner with us to meet your sustainability goals and make a lasting environmental impact. From sponsoring planting events to launching green initiatives with your employees, we offer tailored programs for responsible businesses."
        buttonTxt="Company"
      ></TxtCard>
      <TxtCard
        heading="School"
        sub="Inspire the next generation to protect our planet. We work with schools to organize educational workshops, tree planting days, and green campaigns — empowering students to become young environmental stewards."
        buttonTxt="School"
      ></TxtCard>
    </div>
  );
}

export default InvolvedContent;
