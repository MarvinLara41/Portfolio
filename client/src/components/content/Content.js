import React, {Component} from 'react';
import './style.css';
import Image from 'react-bootstrap/Image'

class Content extends Component{
   constructor(){
       super()
   }
   
  
   
   render(){

    return(
        <div className="content">
            <h3 className="h3"> 
                I have a diverse set of skills that can be intergrated on the front-end or the back-end of developing a website. </h3>
                <br />
            
                <div className="links">
                    <h4 className="h3">Let's work together</h4>
                    <div className="links"> 
                   <a href="https://github.com/MarvinLara41?tab=repositories">
                    <button className="git"><h4>GitHub</h4>
                    <img src="/images/github.png" alt="github"/>
                    </button>
                    </a>
                    <a href="https://docs.google.com/document/d/1JmiAdZbprHIwAqzuJB1N3w7Fe3rhv2wuVF2jerhAoOI/edit?usp=sharing">
                    <button className="resume"> <h4>Resume</h4>
                    <img src="/images/resume.png" alt="my image"/>
                    </button> 
                    </a>
                    </div>
                </div>

                <br />

        <div className="images">    
          <Image src="/images/mongodb.jpg" alt="mongo" roundedCircle />
          <Image src="/images/express.png" alt="express" roundedCircle />
          <Image src="/images/react.jpg" alt="react" roundedCircle />
          <Image src="/images/node.jpg" alt="node" roundedCircle />
          <Image src="/images/js.jpg" alt="js" roundedCircle />
          <Image src="/images/mysql.jpg" alt="mysql" roundedCircle />
        </div>
        </div>
    )
}
}

export default Content;