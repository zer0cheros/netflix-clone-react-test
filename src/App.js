import {auth} from './componet/firebase-config'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Body from './componet/Body';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Body />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
