import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

import purpleHearIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';


const Landing: React.FC = () => {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">

                <div className="logo-container">
                    <img src={logoImg} alt="logo"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img 
                src={landingImg} 
                alt="plataforma" 
                className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="studyIcon"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="giveClasses"/>
                        Dar aulas
                    </Link>
                </div>

                <span className="total-conections">
                    Total de 100 conexoes ja realizadas 
                    <img src={purpleHearIcon} alt="heart icon"/>
                </span>


            </div>
        </div>
    )
};


export default Landing;