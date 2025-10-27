"use client";
import { useState } from "react";

interface CounterProps {
  initialCount?: number;
  initialStep?: number;
}

export default function Counter({
  initialCount = 0,
  initialStep = 1,
}: CounterProps) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(initialStep);

  const increment = () => setCount((c) => c + step);
  const decrement = () => setCount((c) => Math.max(0, c - step));
  const reset = () => setCount(initialCount);

  const handleStepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setStep(value > 0 ? value : 1);
  };

  return (
    <section className="border border-gray-300 rounded-lg p-6 w-64 text-center bg-white shadow-sm">
      <div
        aria-live="polite"
        className="text-4xl mb-4 font-semibold text-blue-600"
      >
        {count}
      </div>

      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          +{step}
        </button>
        <button
          onClick={decrement}
          disabled={count - step < 0}
          className={`px-3 py-1 rounded ${
            count - step < 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          -{step}
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>

      <div>
        <label htmlFor="step" className="mr-2 font-medium">
          Step:
        </label>
        <input
          id="step"
          type="number"
          min="1"
          value={step}
          onChange={handleStepChange}
          className="border rounded px-2 py-1 w-16 text-center"
        />
      </div>
    </section>
  );
}
