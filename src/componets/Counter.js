import React from 'react';


class CounterApp extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          count: 0
        };
  }

  handeleIrement() {
      this.setState({
        count: this.state.count + 1 
      });
  }

  handeleDecrement() {
    if(this.state.count === 0){
      alert("ups, not minus llowed")
      
    } else {
    
      this.setState({
        count: this.state.count - 1
      });
    }
    }

  render() {
    return(
      <div>
        <div>{this.state.count}</div>
        <div>
          <button onClick={() => this.handeleIrement()}>+</button>
          <button onClick={() => this.handeleDecrement()}>-</button>
      </div>
      </div>
    );
  } 
}

export default CounterApp