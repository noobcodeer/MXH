import React from "react";
import './App.css';
import Header from "./Header";
import HourCards from "./HourCards";
import SwipeButtons from "./SwipeButtons"


function App() {
  return (
    <div className="App">
      
      {/*Header*/}
      <Header /> 
      {/*App12hourscards*/}
      <HourCards />
      {/*SwipeButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
