import "./App.css";
import { Joker1 } from "./cards";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      hello cards
      <br />
      <Joker1 />
    </div>
  );
}

export default App;
