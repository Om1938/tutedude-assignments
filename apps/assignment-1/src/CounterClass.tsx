import { Component } from "react";
import "./Counter.css";

interface CounterClassState {
  count: number;
}

export default class CounterClass extends Component<{}, CounterClassState> {
  state: CounterClassState = { count: 0 };

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0,
    }));
  };

  render() {
    return (
      <div className="counter-card">
        <h2 className="counter-heading">Class Component</h2>
        <p className="counter-value">{this.state.count}</p>
        <div className="button-group">
          <button className="btn decrement" onClick={this.decrement}>
            -
          </button>
          <button className="btn increment" onClick={this.increment}>
            +
          </button>
        </div>
      </div>
    );
  }
}
