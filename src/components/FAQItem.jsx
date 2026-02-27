export const FAQItem = ({ question, answer, active, setActive }) => {
  let plusImg = <img src="../public/assets/images/icon-plus.svg"></img>;

  return (
    <div className="faq">
      <div className="question-box">
        <h2 className="faq-question">{question}</h2>

        <div onClick={setActive}>
          <img
            src={
              active
                ? "../public/assets/images/icon-minus.svg"
                : "public/assets/images/icon-plus.svg"
            }
            alt="toggle"
          />
        </div>
      </div>

      {active && <p className="faq-answer">{answer}</p>}
    </div>
  );
};
