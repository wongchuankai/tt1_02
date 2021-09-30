import Products from "./components/Products";
import Topnavbar from './components/Topnavbar';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Router>
    <Topnavbar />
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route exact path="/products">
      <Products />
      </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
