import React, { useState, useEffect } from "react";

function AdviceGenerator() {

  const [advice, setAdvice] = useState("");

  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchAdvice();
  }, []);

  function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip.advice));

    setCount((prevCount) => prevCount + 1);
  }

  const adviceNoun = count === 1 ? "piece of advice" : "pieces of advices";

  
  return (
    <div>
      <h1 className="text-4xl font-bold pb-4">{advice}</h1>
      <button
        onClick={fetchAdvice}
        className="border-black border-[1px] bg-slate-200 px-2 py-1 mb-3 text-sm font-semibold rounded-sm"
      >
        Get advice
      </button>
      <p className="font-medium ">
        You have read <span className="font-bold">{count}</span> {adviceNoun}
      </p>
    </div>
  );
}

export default AdviceGenerator;
