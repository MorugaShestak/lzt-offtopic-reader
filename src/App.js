import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useParams
} from "react-router-dom";
import Index from "./pages/Index";
import Thread from "./components/Thread/Thread";
import Threads from "./components/Threads/Threads"

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/thread/:id" component={Thread}/>
            <Route path="/threads" component={Threads}/>
            <Route path="">
                <Index/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
