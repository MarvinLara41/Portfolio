import React from 'react';
import './style.css'; 

function Resume() {
    return(
        <div className="grid"> 
        
            <div className="resume">
           <h1 className="h1"> Marvin Lara</h1>
            <ul className="info">
                <il>Union City, NJ 07087  </il>
                <br />
                <il><b>Email:</b> ​Laramarvin24@gmail.com </il>
                <br />
                <il><b>Phone Number:</b> 551-556-2628 </il>
                <br />
                <il><b>GitHub:</b> https://github.com/MarvinLara41</il>
            </ul>
            </div>
                
                 <div className="summary">
                    <h2 className="h2">Summary</h2>
                    <p className="summaryP">Full Stack Web  Developer with a background in Research and Development in Wet Chemistry. I am looking to obtain a position in an interactive environment that seeks an ambitious, self motivated individual, where  acquired skills and experience can be used toward continued growth and advancement. </p>
                </div> 

                 <div className="tech">
                    <h2>Technical Skills</h2>
                    <p>
                        <ul>
                            <il><b>Lanuage:</b> Javascript  </il>
                            <br />
                            <il><b>Front-end:​</b> HTML5, CSS3, jQuery, Bootstrap,ECMAScript 6, REACT  </il>
                            <br />
                            <il><b>API Interactions:​</b>API, JSON, AJAX  </il>
                            <br />
                            <il><b>Databases:​</b> MySQL , MongoDB (Mongoose), Firebase  </il>
                            <br />
                            <il><b>Dev Tools:​</b> Heroku, Git, GitHub  </il>
                            <br />
                            <il><b>Back-end:​</b> Templating engines (HandleBars , Mustache) , Node JS, Express, MVC, REST API, ORM (Sequelize)</il>
                        </ul>
                    </p>
                </div>
                <br />
                 <div className="projects">
                    <h2 className="project">Projects</h2>
                        <p> 
                            <ul> 
                                <il><b>Name:</b> ​TimeStamp </il>
                                <br />
                                <il><b>My Responsibilities:</b>  ​Set up server for a connection to front-end components. Assure all back-end REST API’s are properly connected to each component to render the correct data. Set up Mongo database  that is properly connected to the server. Deploy the application to Heroku and trouble-shoot any bugs.</il>
                                <br />
                                <b>GitHub:</b><a href="https://github.com/MarvinLara41/TimeStamp/tree/master/timestamp"> View Project</a>
                            </ul>
                        </p>
                </div> 

                <div className="work">
                        <h2 >Work Experience</h2>
                        <p className="exp">
                            <ul> 
                                <il><b>Title:</b>​Package Handler (Seasonal)          <b>Date:</b> November 2019- Present </il>
                                <br />
                                <il><b>Company Name:</b>UPS   <b>Address:</b> Secaucus, NJ </il>
                                <br />
                                <il><b>Role:</b>Load/unload packages onto the designated delivery trucks. Track the amount of packages loaded onto each delivery truck. Assure drivers are aware of their delivery routes. </il>
                            </ul>
                            <br />
                            <ul> 
                                <il><b>Title:</b>​RD Lab Technician  <b>Date:</b>August 2015 - August 2019 </il>
                                <br />
                                <il><b>Company Name:</b>Kirker Enterprises  <b>Address:</b> Paterson, NJ </il>
                                <br />
                                <il><b>Role:</b>Research various new raw materials for cogent advancements to improve formulas. Communicate with Lab peers daily  on useful techniques or raw materials that may benefit their projects. Plan and organize various projects to meet customer deadlines. Maintain lab book updated and well detailed on latest research results. Properly document COA, SDS, IFRA statements and other documents with Regulatory Department. Work on joint projects with the Marketing team to develop creative products to present to current and new customers. Update Lab Manager weekly on statuses of individual and group projects. Work with sister companies to evaluate their new materials that haven’t been put out into the market.</il>
                            </ul>
                            <br />
                            <ul> 
                                <il><b>Title:</b>​Dairy Team Member           <b>Date:</b>August 2013 - December 2017 </il>
                                <br />
                                <il><b>Company Name:</b>Whole Foods Market           <b>Address:</b> Edgewater, NJ</il>
                                <br />
                                <il><b>Role:</b> ​Maintain dairy products in consistently filled. Properly rotate oldest dated products using the FIFO method. Keep a good customer relation and encourage upselling. Communicate with team members on daily tasks that need to be accomplished.  Use IRMA system to place orders, track losses, and view potential new products. Consistently check product dates to remove expired products.</il>
                            </ul>
                            <br />

                        </p>
                </div>  

                 <div className="education">
                        <h2>Education</h2>
                        <p>
                            <ul>
                                <il><b>Bootcamp Certificate: Rutgers University​:</b> Jersey City, NJ</il>
                                <p><b>Certificate Granted:</b>​ December 2019</p>
                                <br />
                                 <il><b>​Lab Technician Biotechnology Program​ ​:Fortis Institute​​:</b> Wayne, NJ​</il>
                                 <p><b>Certificate Granted:</b>​ ​June, 2015</p>
                                 <br />
                                 ​<il><b>​Union City High School : Diploma:​</b> Union City, NJ  Graduated:​ June, 2013 </il>
                            </ul>
                        </p>
                </div> 

                 <div className="file">
                        <h3>View Resume</h3>
                        <a href="https://docs.google.com/document/d/1JmiAdZbprHIwAqzuJB1N3w7Fe3rhv2wuVF2jerhAoOI/edit?usp=sharing">Click Here</a>
                </div>  
            </div>
            
    )
}

export default Resume;