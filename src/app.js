import React from "react";
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Game from "./containers/tick-tack-toe";
import Calculator from "./containers/calculator";
import RandomGen from "./containers/random-generator";
import Home from "./home";

export default function App() {
  return (
    <Router>
      <Routes>  
        <Route 
          exact path={"/Game"} 
          element={<Game/>}
        />
        <Route 
          exact path={"/Calculator"} 
          element={<Calculator/>}
        />
        <Route 
          exact path={"/Random-Generator"} 
          element={<RandomGen/>}
        />
        <Route 
          exact path={"/"} 
          element={ <Home/> }
        />
      </Routes>    
    </Router>
  );
}