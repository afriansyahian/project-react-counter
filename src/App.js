import React from 'react'
import './App.css';
import  Greeting  from './componets/greeting'
import GreetingState from "./componets/greetingState"
import CounterApp from "./componets/Counter"


 function App(){
  return(
    <div className ="App">
      <section>
        Function Components 
        <Greeting/>
      </section>  

     <hr/>     
      <section>
        Function state components 
        <GreetingState/>
      </section>
      
      <hr/>

      <CounterApp />
    </div>
  );
}

export default App;
