import React from "react";
import FAQItem from "./FAQItem";
import '../css/FAQ.css'
function FAQs() {
  const faqs = [
    {
      question: "Can I book therapy sessions at any time?",
      answer:
        "Yes! Our therapists offer flexible scheduling to accommodate your availability.",
    },
    {
      question: "Can I use Emocare anonymously?",
      answer:
        "Yes! You can participate in the public chatroom anonymously and engage with others without revealing your identity. However, for therapy sessions, you’ll need to provide personal details to ensure a proper therapeutic process.",
    },
    {
      question: "What can I do if I encounter a technical issue?",
      answer:
        "If you experience any issues while using the platform, please reach out to our support team via the Contact Us page, and we’ll be happy to assist you.",
    },
    {
      question: "What kind of support can I get in the chatroom?",
      answer:
        "If you experience any issues while using the platform, please reach out to our support team via the Contact Us page, and we’ll be happy to assist you.",
    },
  ];

  return (
    <ul>
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </ul>
  );
}

export default FAQs;
