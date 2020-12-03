import React from 'react';
import './components.css';
import photo from '../components/img/profMe.jpg';
import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';
import Pdf from '../components/assets/WebResume1.pdf';

const fadeAnimation = keyframes`${fadeInLeft}`;

const FadeDiv = styled.div`
    animation: 1s ${fadeAnimation};
`;

function About() {
    return (
        <main id="home-page" className="container">
            <br></br>
                <section className="row justify-content-center">
                    <FadeDiv className="col-sm-10 col-md-8 col-lg-6 col-xl-5 about mb-4">
                        <img src={photo} className="rounded-circle img-fluid img-dec" alt="Professional"></img>
                        <div className="dropdown-divider"></div>
                        <p className="text-center">
                            Hi, I'm Jake and welcome to my portfolio!
                        </p>
                        <p className="text-center">
                            I'm a full-stack developer that enjoys creating interactive elements in the browser
                            and developing server-side websites/applications utilizing databases.
                        </p>
                        <p className="text-center">
                            I like to code things from scratch and enjoy bringing ideas to life in the browser.
                        </p>
                        <p className="text-center">
                            Click <a href={Pdf}>here</a> to view my resume!
                        </p>
                    </FadeDiv>
                </section>
            <br></br>
        </main>
    );
}

export default About;