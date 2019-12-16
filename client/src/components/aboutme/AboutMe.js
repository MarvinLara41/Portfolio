import React from 'react';
import './style.css'


const AboutMe = () => {


    return(
        <div className="about">
                <h1>About Me</h1>
                <div className="me">
                    <p>Hello! Thank you for reaching this area of the site to find out more about me! My name is Marvin and I am a recent graduate from Rutgers Coding Bootcamp. I am ambitious driven person with a curiosity that usually determines goals. My hobbies include weight lifting, reading, hiking, trying out new restaurants and yelling at my television on Sunday afternoons while I watch football. I reside in Union City, NJ. I live a few blocks away from the Lincoln Tunnel and can get to NYC in about 15 minutes. I am consistently learning something new and would love to be apart of an amazing web development team. Thank you for your time, I really do appreciate you reading this far along.  </p>
                </div>
                <div className="photo"><img src="/images/me.jpg" alt="me"/> </div>
        </div>
    )
}

export default AboutMe;