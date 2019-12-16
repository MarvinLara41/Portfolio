import React from 'react';
import {useSpring, animated} from 'react-spring';
import './style.css';
import Image from 'react-bootstrap/Image'

const Content = () => { 
    const fade = useSpring({ from:{ opacity: 0}, opacity: 1});    

    return(
        
        <div className="content">
           
            <p className="para"> 
                I have a diverse set of skills that can be intergrated on the front-end or the back-end of developing a website. </p>
                <br />

        < animated.div className="images" style={fade}>    
          <Image src="/images/mongodb.jpg" alt="mongo" roundedCircle />
          <Image src="/images/express.png" alt="express" roundedCircle />
          <Image src="/images/react.jpg" alt="react" roundedCircle />
          <Image src="/images/node.jpg" alt="node" roundedCircle />
          <Image src="/images/js.jpg" alt="js" roundedCircle />
          <Image src="/images/mysql.jpg" alt="mysql" roundedCircle />
        </animated.div>
        </div>
        
    )
}


export default Content;