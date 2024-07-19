import React from 'react';
//import PropTypes from 'prop-types'
import heroImage from '../../images/heroImage.jpg';
import styled, {
    keyframes
} from 'styled-components';
import { devices } from '../../utils/constantes';

const Show = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0.5;
    }

    100%{
        opacity:1;
    }
`;

const progressbar = keyframes`
  0% {
    background-position: 0 0;
  }
  33%,
  100% {
    background-position: -100% 0;
    color: #333;
  }
`;

const ContainerHero = styled.div`
    max-width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${heroImage}) !important;
    object-fit: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;
    width: 100%;
    animation: ${Show} 0.5s linear;
`;
const ContainerHeroBanner = styled.div`
    text-align: center;
    padding: 0 3rem;
`;
const HeroTitleStyled = styled.h1`
    color: #fff;
    text-transform: uppercase;
    text-shadow: 0 0 0.1rem black;
    font-weight: 600;
    font-size: 3rem;
    letter-spacing: 0.5rem;

    padding: 0 5px;
    margin-bottom: 5rem;
    display: inline-block;
    background-size: 200% 100%;
    background-image: linear-gradient(
        to left,
        #cce5ff 50%,
        black 50%
    );

    animation: ${progressbar} 7s ease infinite;

    @media only screen and (${devices.tablet}) {
        font-size: 1.8rem;
        letter-spacing: 0.2rem;
        padding: 0.5rem 0;
    }

    @media only screen and (${devices.iphone14}) {
        font-size: 1rem;
        letter-spacing: 0.2rem;
        padding: 0.5rem 0;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 1rem;
        letter-spacing: 0.2rem;
        padding: 0.5rem 0;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 1rem;
        letter-spacing: 0.2rem;
        padding: 0.5rem 0;
    }
    @media only screen and (${devices.mobileP}) {
        font-size: 1rem;
        letter-spacing: 0.1rem;
        padding: 0.5rem 0;
    }
`;
const HeroTextStyled = styled.p`
    color: #cce5ff;
    font-size: 2rem;
    &::selection {
        background: coral;
        color: black;
    }
    @media only screen and (${devices.iphone14}) {
        font-size: 1rem;
        letter-spacing: 0.2rem;
        padding: 0.5rem 0;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 1rem;
        letter-spacing: 0.2rem;
        padding: 0.5rem 0;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 1rem;
        letter-spacing: 0.2rem;
        padding: 0.5rem 0;
    }
    @media only screen and (${devices.mobileP}) {
        font-size: 1rem;
        letter-spacing: 0.1rem;
        padding: 0.5rem 0;
    }
`;
const HeroBtnStyled = styled.a`
    font-size: 1.3rem;
    font-weight: 600;
    &:hover {
        box-shadow: 0 0 0.4rem #cce5ff;
        background: #cce5ff;
        color: #333;
    }
`;

const Hero = props => {
    return (
        <>
            <header
                className="header-hero"
                id="top"
            >
                <ContainerHero className="hero">
                    <ContainerHeroBanner className="hero-banner">
                        <HeroTitleStyled className="hero-title">
                            Front-end Developer
                        </HeroTitleStyled>

                        <HeroTextStyled className="hero-text">
                            Olá eu sou o Sandro
                            Seivane, sou um React
                            Developer com
                            dedicação,
                            Criatividade e com
                            muita Vontade de
                            "partir paredes!"
                        </HeroTextStyled>

                        <HeroBtnStyled
                            href="#section-header"
                            className="hero-btn btn btn-light text-center font-weight-bold px-5 mt-5 rounded-pill"
                        >
                            Ver mais...
                        </HeroBtnStyled>
                    </ContainerHeroBanner>
                </ContainerHero>
            </header>
        </>
    );
};

Hero.propTypes = {};

export default Hero;
