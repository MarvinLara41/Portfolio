import React from 'react';
import './App.css';
import NavBar from "./components/nav/Nav";
import Content from "./components/content/Content";
import Resume from "./components/resume/Resume";
import AboutMe from "./components/aboutme/AboutMe";
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const particle= {
  "particles": {
          "color":{
            "value": "#000000"
          },
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },           
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    },
      "style":{
              width: '100vw',
              height: `100vh` 
      }
}




function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <Switch>
      <Route path="/" exact component={Content} />
      <Route path="/Portfolio" exact component={Content} /> 
      <Route path="/resume" exact component={Resume} />
      <Route path="/aboutme" exact component={AboutMe} />
      </Switch>
      <Particles params={particle} className="particle"/>
      </div>
     </Router> 
  );
}

export default App;
