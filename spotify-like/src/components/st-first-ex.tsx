import { count } from "console";
import { Component } from "react";

type propsType = {
  step: number;
  max: number;
};

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem("counterState");
  console.log(storage);
  if (storage) return JSON.parse(storage);
  return { count: 0 };
};

class FirstEx extends Component<propsType, { count: number }> {
  constructor(props: propsType) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.customIncrement = this.customIncrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + this.props.step });
  }
  customIncrement() {
    this.setState(
      (state, props) => {
        if (state.count >= props.max) return;
        return { count: state.count + props.step };
      },
      () => {
        console.log("After!", this.state);
        getStateFromLocalStorage();
      }
    );
  }
  decrement() {
    this.setState({ count: this.state.count - this.props.step });
  }
  reset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className="border-8 font-bold m-2 p-8 w-md">
        <p className="text-5xl text-center mb-10">{this.state.count}</p>
        <section className="flex justify-center">
          <button
            onClick={this.customIncrement}
            className="bg-red-600 border text-white m-1 py-1 px-4 rounded hover:bg-red-500"
          >
            Increment
          </button>
          <button
            onClick={this.decrement}
            className="bg-red-600 border text-white m-1 py-1 px-4 rounded hover:bg-red-500"
          >
            Decrement
          </button>
          <button
            onClick={this.reset}
            className="bg-red-600 border text-white m-1 py-1 px-4 rounded hover:bg-red-500"
          >
            Reset
          </button>
        </section>
      </div>
    );
  }
}

export default FirstEx;
