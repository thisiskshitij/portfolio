import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hi, I'm Kshitij Singh, a Computer Science and Engineering student with a strong passion for web development and programming.
My core skills revolve around the MERN stack (MongoDB, Express.js, React, Node.js) and Java, and I enjoy building full-stack web applications that solve real-world problems. I'm also proficient in JavaScript, both for front-end and back-end development, and love creating dynamic, responsive user experiences.
I’ve worked on several projects, including chat applications, blogs, and REST APIs, and I am continuously exploring new tools and frameworks to improve my development skills. I’m currently preparing for placements and open to exciting internship or project opportunities in web or software development.
                        </p>
                        <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            {/* <li>TypeScript</li> */}
                            <li>React</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>Java</li>
                            <li>Swift</li>

                            {/* <li>NestJS</li> */}
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About