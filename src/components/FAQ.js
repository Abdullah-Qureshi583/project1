
"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  const faqs = [
    {
      question: "How do I update my billing information?",
      answer:
        "To update your billing information, navigate to the billing section in your account settings. Follow the prompts to edit your details.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
    },
    {
      question: "How do I update my profile information?",
      answer:
        "You can update your profile information by going to the 'Profile' section in your account settings. Edit the fields as needed and save your changes.",
    },
    {
      question: "How do I find my purchase history?",
      answer:
        "To find your purchase history, navigate to the 'Orders' or 'Purchase History' section in your account. You'll see a list of your past transactions.",
    },
  ];

  return (
    <section className="pt-[265.94px] pl-[28px] pr-[6px] ">
      {/* header */}
      <div className="">
        <h2 className="text-[31.24px] text-white font-[700] leading-[39.86px]">
          Frequently Asked <span className="text-darkgreen">Questions</span>{" "}
        </h2>
        <div className="h-1 w-[50px] bg-lightgreen mt-[28px] "></div>
        <p className="text-[17.5px] text-darkgray leading-[26.24px] mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
          blandit.
        </p>
      </div>

      <div className="accordion-group pt-[62.76px]  space-y-[36px]  ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`accordion bg-[#101216] py-3 px-6   rounded-md  transition-all duration-300  hover:bg-[#2d313b] ${
              activeAccordion === index ? "bg-[#202329] " : ""
            }`}
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-white w-full transition duration-500 text-left "
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeAccordion === index}
            >
              <h5 className="text-[15.38px] font-[700] ">{faq.question}</h5>

              <FaChevronDown
                className={`text-lightgreen size-[18px] transition duration-500 font-bold ${
                  activeAccordion === index ? "rotate-180 text-lighgreen" : ""
                }`}
              />
            </button>
            <div
              className={`accordion-content w-full px-0 overflow-hidden  duration-300 ${
                activeAccordion === index ? "max-h-[250px]" : "max-h-0"
              }`}
              aria-hidden={activeAccordion !== index}
            >
              <p className="text-[15.38px] text-darkgray leading-6 mt-4">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
