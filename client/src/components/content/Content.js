import React from 'react';
import './style.css';
import Image from 'react-bootstrap/Image'


    const Content = () => {


    return(
        
        <div className="grid">
           
            <div> 
                <h1><b>Marvin Lara</b></h1>
                <p className="para">
                Hello my name is Marvin. I have a diverse set of skills that can be intergrated on the front-end or the back-end  in website development.</p>  
            </div>
            <br />
        <div className="images">
          <Image src="/images/mongodb.jpg" alt="mongo" roundedCircle className="mongo"/>
          <Image src="/images/express.png" alt="express" roundedCircle className="express"/>
          <Image src="/images/react.jpg" alt="react" roundedCircle className="react"/>
          <Image src="/images/node.jpg" alt="node" roundedCircle className="node"/>
          <Image src="/images/js.jpg" alt="js" roundedCircle className="js"/>
        </div>
    </div> 
)
}


export default Content;