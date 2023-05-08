import { Component } from "react";

type propsType = {
  step: number;
  max: number;
};

type stateType = {
  count: number;
};

const getStateFromLocalStorage = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storage = localStorage.getItem("counterState");
    console.log(storage);
    if (storage) return JSON.parse(storage);
    return { count: 0 };
  }
  return { count: 0 };
};

class FirstEx extends Component<propsType, stateType> {
  constructor(props: propsType) {
    super(props);
    this.state = getStateFromLocalStorage();
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.customIncrement = this.customIncrement.bind(this);
    this.customDecrement = this.customDecrement.bind(this);
    this.reset = this.reset.bind(this);
    this.showCountOnTitle = this.showCountOnTitle.bind(this);
  }

  showCountOnTitle(usedState: stateType) {
    localStorage.setItem("counterState", JSON.stringify(usedState));
    document.title = `Count: ${usedState.count}`;
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
        localStorage.setItem("counterState", JSON.stringify(this.state));
        document.title = `Count: ${this.state.count}`;
      }
    );
  }
  decrement() {
    this.setState({ count: this.state.count - this.props.step });
  }
  customDecrement() {
    this.setState(
      (state, props) => {
        return { count: state.count - props.step };
      },
      () => {
        localStorage.setItem("counterState", JSON.stringify(this.state.count));
        document.title = `Count: ${this.state.count}`;
      }
    );
  }
  reset() {
    this.setState(
      (state) => {
        return { count: 0 };
      },
      () => {
        this.showCountOnTitle(this.state);
      }
    );
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
            onClick={this.customDecrement}
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
