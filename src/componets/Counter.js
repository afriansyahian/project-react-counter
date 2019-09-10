import React from "react";

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  Increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  Decrement() {
    if (this.state.count === 0) {
      alert("ups, not minus llowed");
    } else {
      this.setState({
        count: this.state.count - 1
      });
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <div>
          <button onClick={() => this.Increment()}>+</button>
          <button onClick={() => this.Decrement()}>-</button>
        </div>
      </div>
    );
  }
}

export default CounterApp;
