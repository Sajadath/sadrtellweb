import { useState } from "react";

function QnA({ questionAndAnswer }) {
  const { question, answer } = questionAndAnswer;
  const [show, setShow] = useState(false);
  return (
    <li
      onClick={() => setShow((show) => !show)}
      className="cursor-pointer border-b-1 border-stone-300 py-3 pr-6"
    >
      <div className="flex">
        <p
          className={`text-stone-400 transition-all duration-300 ${show ? "rotate-45" : "rotate-0"} px-2`}
        >
          +
        </p>
        <h3 className="hover:text-sadrtell mb-2 text-xl transition-all duration-300">
          {question}
        </h3>
      </div>
      <div
        className={`max-h-0 overflow-hidden transition-all duration-300 ${show && "max-h-30"}`}
      >
        <h3 className="text-lg text-stone-500">{answer}</h3>
      </div>
    </li>
  );
}

export default QnA;
