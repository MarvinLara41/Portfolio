import React from 'react';
import './style.css';
import Image from 'react-bootstrap/Image';
import mongodb from '../../images/mongodb.jpg';
import express from '../../images/express.png';
import js from '../../images/js.jpg';
import react from '../../images/react.jpg';
import node from '../../images/node.jpg';
import mysql from '../../images/mysql.jpg';

    const Content = () => {


    return(
        
        <div className="grid">
           
            <div> 
                <h1 className="header"><b>Marvin Lara</b></h1>
                <p className="para">
                Hello my name is Marvin. I have a diverse set of skills that can be intergrated on the front-end or the back-end  in website development.</p>  
            </div>
            <br />
        
        <div className="images">
            <div className="mongo"> <Image src={mongodb} alt="mongo" roundedCircle className="mongo"/></div>
            <br />
            <div className="express"><Image src={express} alt="express" roundedCircle className="express"/></div>
            <br />
            <div className="react"><Image src={react} alt="react" roundedCircle className="react"/></div>
            <br />
            <div className="node"><Image src={node} alt="node" roundedCircle className="node"/></div>
            <br />
            <div className="js"><Image src={js} alt="js" roundedCircle className="js"/></div>
            <br />
            <div className="mysql"><Image src={mysql} alt="mysql" roundedCircle className="mysql"/></div>
        </div>
        
    </div> 
)
}


export default Content;