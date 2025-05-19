import Faq from "../Reusable/Faq";
import InfoHeader from "../Reusable/InfoHeader";
const FAQuestions = [
  {
    id: "faq-1",
    question: "How does it work?",
    answer:
      "After you donate, our team collaborates with trusted local partners to identify the ideal location for planting your tree, ensuring it has the best conditions to flourish. We carefully select areas that need reforestation, contributing to long-term environmental benefits. You’ll receive an email with your donation details, the planned planting location, and the estimated time frame. You can also request updates and photos of your tree’s progress via email.",
  },
  {
    id: "faq-2",
    question: "Do you accept Paypal or Stripe payments?",
    answer:
      "We accept payments through Credit Card, Debit Card, and Google Pay. Unfortunately, we do not currently support PayPal or Stripe directly, but we ensure secure and convenient payment options for all donations.",
  },
  {
    id: "faq-3",
    question: "Can I donate from a non-European country?",
    answer:
      "Yes, you can donate from a country outside of the EU. However, please note that the donation will go towards planting a tree within the EU. We appreciate your support in helping us make a positive impact!",
  },
  {
    id: "faq-4",
    question: "Who plants the trees and where are they planted?",
    answer:
      "The trees are planted by our experienced reforestation partners, who specialize in environmental restoration. We choose strategic locations across the EU, ensuring each tree is planted in the most suitable environment to help it grow and thrive, contributing to the restoration of forests and promoting sustainability.",
  },
  {
    id: "faq-5",
    question: "How can I guarantee the trees have been planted?",
    answer:
      "We ensure transparency by keeping you informed every step of the way. After your donation, you will receive an email with the relevant details, including your chosen tree's planting status. You can also request periodic updates and photos of the tree as it grows. Our trusted partners handle the planting process, and we make sure your tree is planted in the best possible location for its growth.",
  },
  {
    id: "faq-6",
    question: "Can I get a refund on my donation?",
    answer:
      "Unfortunately, we are unable to offer refunds, as all donations are considered final.",
  },
];
function FAQ() {
  return (
    <div className="flex flex-col">
      <InfoHeader info="FAQ"></InfoHeader>
      <div className="flex flex-col">
        {" "}
        {FAQuestions.map((each) => (
          <Faq
            key={each.id}
            question={each.question}
            answer={each.answer}
          ></Faq>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
