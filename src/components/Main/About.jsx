import React from 'react';
import '../../pages/About/AboutPage.css';
import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';


/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const proyectImg = require.context('../../img', true);

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <style>
            {`
                .experience_col {
                    width: 100%;
                    padding: 20px;
                    background: transparent;
                }

                .experience_cards {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    justify-content: center;
                }

                .experience_col h3 {
                    font-size: 30px;
                    margin-bottom: 20px;
                    color: #00040f;
                }

                .exp-card {
                    background: #e1e1e1;
                    border: 2px solid #00040f;
                    border-radius: 24px;
                    padding: 20px;
                    height: 490px;
                    max-width: 400px;
                    transition: background 0.3s ease;
                    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
                }

                .exp-card:hover {
                    background: linear-gradient(to top left, #e1e1e1, #fff);
                }

                .exp-card .header {
                    display: flex;
                    align-items: flex-start;
                }

                .exp-card .img-container {
                    max-width: 80px;
                    margin-right: 12px;
                }

                .exp-card .img-container img {
                    width: 100%;
                    height: auto;
                }

                .exp-card .text-container {
                    max-width: 125px;
                }

                .exp-card .title {
                    font-size: 1.5rem;
                    background: linear-gradient(to right, #007bff, #00c4ff);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    font-weight: 600;
                }

                .exp-card .subtitle {
                    font-size: 1rem;
                    color: #00040f;
                    margin: 8px 0;
                }

                .exp-card .date {
                    font-size: 0.875rem;
                    color: #4b5563;
                    font-style: italic;
                }

                .exp-card .description {
                    font-size: 3 rem;
                    color: #4b5563;
                    line-height: 2.5;
                    margin-top: 20px;
                    padding: 8px;
                }

                @media (max-width: 768px) {
                    .exp-card {
                        height: 450px;
                    }
                }
            `}
        </style>
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="container">
            <div className="row">
                <div className="columns" data-aos="fade-right" data-aos-delay="300">
                    <h3>
                        <FormattedMessage
                            id='im'
                            defaultMessage="This isn't an intro, it's a recon dump on me"
                        />
                    </h3>
                    <h4>
                        <FormattedMessage
                            id='description'
                            defaultMessage='My name is Rajkumar Prajapati and I am CyberSecurity Analytics'
                        />
                    </h4>
                    <p>
                        <FormattedMessage
                            id='my-description'
                            defaultMessage='A Passionate Cybersecurity Analyst & Ethical Hacker with hands-on experience in Web, API, Android, iOS, and Cloud Pentesting. I specialize in identifying and reporting vulnerabilities through manual and automated testing, backed by solid coding skills in Python, Java, and web technologies. From source code reviews to AWS cloud misconfigurations, I deliver actionable security insights through professional reports and proof-of-concept exploits.'
                        />
                    </p>
                    <ul>
                        <li>
                            <p>
                                <span>
                                    <FormattedMessage
                                        id='years'
                                        defaultMessage='Age:'
                                    />
                                </span>
                                22
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>
                                    Hobbies:
                                </span>
                                Chess, Volleyball and Tech.
                            </p>
                        </li>
                        <li>
                            <p><span>Email:</span> rajprajapari2052@gmail.com</p>
                        </li>
                        <li>
                            <p>
                                <span>
                                    <FormattedMessage
                                        id='from'
                                        defaultMessage='From:'
                                    />
                                </span>
                                Mumbai, India
                            </p>
                        </li>
                    </ul>
                    <div className="mas-info">
                        <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
                            <FormattedMessage
                                id='btn-cv'
                                defaultMessage='Download CV'
                            />
                        </a>
                    </div>
                </div>
                <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                    <h3>Skills</h3>
                    <h4>Front-End</h4>
                    <div className="skill">
                        <div>
                            <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                            <h5>HTML</h5>
                        </div>
                        <div>
                            <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                            <h5>CSS</h5>
                        </div>
                        <div>
                            <img alt="Js" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                            <h5>JavaScript</h5>
                        </div>
    
                        <div>
                            <img alt="Bootstrap" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                            <h5>Bootstrap</h5>
                        </div>
                        
                        <div>
                            <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            <h5>React</h5>
                        </div>
                        
                    </div>
                    <h4>Back-End</h4>
                    <div className="skill">
                        <div>
                            <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                            <h5>Java</h5>
                        </div>
                        <div>
                            <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                            <h5>Python</h5>
                        </div>
                        
                       
                        <div>
                            <img alt="mysql" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                            <h5>MySQL</h5>
                        </div>
                        <div>
                            <img alt="postgresql" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                            <h5>PostgreSQL</h5>
                        </div>
                        <div>
                            <img alt="mongodb" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                            <h5>MongodDB</h5>
                        </div>
                    </div>
                    <h4>
                        <FormattedMessage
                            id='tools'
                            defaultMessage='Tools'
                        />
                    </h4>
                    <div className="skill">
                        <div>
                            <img alt="BurpSuite Pro" className="icons-skils" src={proyectImg(`./bur.png`)} title="Visual Studio Code" />
                            <h5>BurpSuite Pro</h5>
                        </div>
                        <div>
                            <img alt="Metaspolite" className="icons-skils" src={proyectImg(`./metp.png`)} title="Visual Studio Code" />
                            <h5>Metaspolite</h5>
                        </div>
                         <div>
                            <img alt="Nessus" className="icons-skils1" src={proyectImg(`./nes.png`)} title="Visual Studio Code" />
                            <h5>Nessus</h5>
                        </div>
                        <div>
                            <img alt="Visual Studio Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" title="Visual Studio Code" />
                            <h5>VS Code</h5>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    </section>
);

export default React.memo(About);