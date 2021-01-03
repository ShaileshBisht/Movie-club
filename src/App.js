import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/top">top</Route>
          <Route path="/search">search</Route>
          <Route path="/">Home</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
