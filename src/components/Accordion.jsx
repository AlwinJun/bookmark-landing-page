import { useState } from "react";
import arrow from "images/icon-arrow.svg";

export default function Accordion({ data }) {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const accordion = data.map(({ id, question, answer }, index) => {
    return (
      <article className="border-b border-slate-300 py-4" key={id}>
        <div
          className="group flex items-center  justify-between hover:cursor-pointer "
          // Return null if the accordion is already open
          //  Else return the click accordion to be shown
          onClick={() =>
            setActiveQuestion((prevActiveQuestion) =>
              prevActiveQuestion === index ? null : index,
            )
          }
        >
          <h4 className="w-3/4 text-left text-sm font-medium text-dark-blue group-hover:text-soft-red sm:text-base xl:text-primary">
            {question}
          </h4>
          <span>
            <img
              src={arrow}
              alt="arrow"
              className={`${
                activeQuestion === index &&
                "rotate-180 hue-rotate-[120deg] saturate-[94%] transition-all duration-200"
              }`}
            />
          </span>
        </div>
        {activeQuestion === index && (
          <p className="mb-2 mt-6 text-left text-sm sm:text-base xl:text-primary">
            {answer}
          </p>
        )}
      </article>
    );
  });

  return accordion;
}
