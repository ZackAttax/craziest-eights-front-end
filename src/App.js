import "./App.css";
import { Joker1 } from "./cards";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Board } from "./Components/Board/Board";
import Card from "./Components/Card/Card";
function App() {
  return (
    <Router>
      <div className="App">
        <main className='flexbox'>
          <br />
          <Board id='board-1' className='board'>
            <Card id="card-1" className='card' draggable='true'>
                  <p>card one</p>
            </Card>
          </Board>

          <Board id='board-2' className='board'>
            <Card id="card-2" className='card' draggable='true'>
                  <p>card two</p>
            </Card>
          </Board>

          <Joker1 />
        </main>
      </div>
    </Router>
  );
}

export default App;
