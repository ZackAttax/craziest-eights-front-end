import "./App.css";
import { Joker1 } from "./cards";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Board } from "./Components/Board/Board";

function App() {
  return (
    <Router>
      <div className="App">
        hello cards
        <br />
        <Board />
        <Joker1 />
      </div>
    </Router>
  );
}

export default App;
