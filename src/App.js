
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FrontPage from './pages/FrontPage'
import Login from './pages/Login'
import Index from "./pages/Index";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FrontPage}></Route>
        <Route exact path="/login" component={Login}></Route>   
        <Route exact path="/home" component={Index}></Route>   
      </Switch>
    </Router>
  );
}

export default App;
