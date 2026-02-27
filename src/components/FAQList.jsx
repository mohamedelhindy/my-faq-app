import { useState } from "react";

import { FAQItem } from "./FAQItem";
import { FAQs } from "../const";

export const FAQList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="faq-container">
        <header className="faq-header">
          <img
            src="../public/assets/images/icon-star.svg"
            alt="Star icon decorating the FAQ section header"
          />
          <h1 className="faq-title">FAQs</h1>
        </header>

        <div className="faq-box">
          {FAQs.map(({ question, answer }, i) => (
            <FAQItem
              key={answer}
              question={question}
              answer={answer}
              active={i === activeIndex}
              setActive={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
