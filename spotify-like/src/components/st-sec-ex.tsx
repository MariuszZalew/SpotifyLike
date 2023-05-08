import { useState } from "react";

type propsType = {
  step: number;
  max: number;
};

let FirstEx2 = (props: propsType) => {
  let [count, setCount] = useState(0);
  let { step, max } = props;

  let customIncrement = () => {
    if (count < max) {
      setCount(count + step);
    }
  };

  let customDecrement = () => {
    setCount((count) => {
      return count - step;
    });
  };

  let customReset = () => {
    setCount(0);
  };

  return (
    <div className="border-8 font-bold m-2 p-8 w-md">
      <p className="text-5xl text-center mb-10">{count}</p>
      <section className="flex justify-center">
        <button
          onClick={customIncrement}
          className="bg-red-600 border text-white m-1 py-1 px-4 rounded hover:bg-red-500"
        >
          Increment
        </button>
        <button
          onClick={customDecrement}
          className="bg-red-600 border text-white m-1 py-1 px-4 rounded hover:bg-red-500"
        >
          Decrement
        </button>
        <button
          onClick={customReset}
          className="bg-red-600 border text-white m-1 py-1 px-4 rounded hover:bg-red-500"
        >
          Reset
        </button>
      </section>
    </div>
  );
};

export default FirstEx2;
