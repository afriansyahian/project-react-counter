import React from 'react'

//statefull component
class GreetingState extends React.Component{
constructor(props){
  super(props);
  this.state = {
      apaAjaBoleh: 'stateful component'
  };
 }

 changeName = () =>{
      this.setState(prevState => ({
        apaAjaBoleh: "stateful component changed"
      }));
 }
 reversName = () =>{
  this.setState(prevState => ({
    apaAjaBoleh: "stateful component"
  }));
}
  render(){
    return (
        <div onClick={this.changeName} onDoubleClick={this.reversName}>
            Hallo dari {this.state.apaAjaBoleh}
        </div>
    )
  }
}


export default GreetingState