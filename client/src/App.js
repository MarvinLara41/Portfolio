import React from 'react';
import './App.css';
import NavBar from "./components/nav/Nav";
import Content from "./components/content/Content";
import Resume from "./components/resume/Resume";
import AboutMe from "./components/aboutme/AboutMe";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
  
    <Router>
      <div className="App">
      < NavBar />
      <Switch>
      <Route path="/portfolio" exact component={Content} /> 
      <Route path="/resume" exact component={Resume} />
      <Route path="/aboutme" exact component={AboutMe} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
