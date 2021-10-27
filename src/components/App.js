import react from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import './App.css';

import Manatee from "./Manatee/Manatee";
import Narwhal from "./Narwhal/Narwhal";
import Whale from "./Whale/Whale";


function App() {
  return (
    <div className="wrapper">
      <nav className="titles">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
      
        <ul>
          <li><Link to="/manatee">Manatee</Link></li>
          <li><Link to="/narwhal">Narwhal</Link></li>
          <li><Link to="/whale">Whale</Link></li>
          <li><Link to="/whale/beluga">Beluga Whale</Link></li>
          <li><Link to="/whale/blue">Blue Whale</Link></li>
        </ul>
        
        <Switch>
          <Route path="/manatee">
            <Manatee />
          </Route>
          <Route path="/narwhal">
            <Narwhal />
          </Route>
          <Route path="/whale">
            <Whale />
          </Route>
        </Switch>
      </BrowserRouter>
      </nav>
    </div>
  );
}

export default App;
