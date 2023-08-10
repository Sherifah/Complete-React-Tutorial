import React, { useState } from "react";

function StepCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1)

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="text-center mt-5">
      <div className="step flex gap-2 justify-center items-center mb-3">
        <button
          className="btn"
          onClick={() => setStep((prevstep) => prevstep - 1)}
        >
          -
        </button>
        <p className="font-semibold">Step: {step}</p>
        <button
          className="btn"
          onClick={() => setStep((prevstep) => prevstep + 1)}
        >
          +
        </button>
      </div>

      <div className="count flex gap-2 justify-center items-center mb-3">
        <button
          className="btn"
          onClick={() => setCount((prevcount) => prevcount - step)}
        >
          -
        </button>
        <p className="font-semibold">Count: {count}</p>
        <button
          className="btn"
          onClick={() => setCount((prevcount) => prevcount + step)}
        >
          +
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default StepCounter;
