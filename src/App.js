import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FrontPage from './pages/FrontPage'
import Login from './pages/Login'
import Index from "./pages/Index";
import Browse from "./pages/Browse";
import {auth} from './componet/firebase-config'
import { useHistory } from "react-router-dom";
import {onAuthStateChanged} from 'firebase/auth'

function App() {
  const FBtoken = localStorage.token
  let history = useHistory()
  const [token, setToken] = useState('')
  const checkToken = ()=>{
    if(FBtoken){
      setToken(FBtoken)
    }
  }
  useEffect(()=>{
    checkToken()
  }, [])
  
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Index}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/profile" component={Browse}></Route>
        <Route exact path="/" component={FrontPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
