import React from 'react';
import Me from '../../images/me.JPG';
import './style.css'


const AboutMe = () => {


    return(
        <div className="about">
                <h1><b>About Me</b></h1>
                <div className="photo"><img src={Me} alt="me"/> </div>
                <div className="paragraph">
                    <p>Hello! Thank you for reaching this area of the site to find out more about me! My name is Marvin and I am a recent graduate from Rutgers Coding Bootcamp. I am an ambitious driven person with a curiosity that usually determines my goals. My hobbies include weight lifting, reading, hiking, eating tasty foods and yelling at my television on Sunday afternoons while I watch football. I reside in Union City, NJ just a few blocks away from the Lincoln Tunnel. I have a wide range of interests that range from Biochemistry, exploring new cities, to brew tasting different types of beers. I am consistently learning something new that can improve my way of living and contribute to my personal growth.Thank you for your time, I really do appreciate you reading this far along. Thank you again!  </p>
                </div>
        </div>
    )
}

export default AboutMe;