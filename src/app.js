import React from "react";
import { HashRouter  as Router, Route , Routes} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import Game from "./containers/tick-tack-toe";
import Calculator from "./containers/calculator";
import RandomGen from "./containers/random-generator";
import CatAPI from "./containers/cat-api";
import Testing from "./containers/testing";
import Home from "./home";

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
            exact path={"/Cat-API"} 
            element={ <CatAPI/> }
          />
          <Route 
            exact path={"/Testing"} 
            element={ <Testing/> }
          />
          <Route 
            exact path={"/"} 
            element={ <Home/> }
          />
        </Routes>    
      </Router>
    </QueryClientProvider>
  );
}