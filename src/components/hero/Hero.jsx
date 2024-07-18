import React from 'react'
//import PropTypes from 'prop-types'
import heroImage from '../../images/heroImage.jpg'
import styled, { keyframes } from 'styled-components';
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
    width: 105%;
`;
const ContainerHeroBanner = styled.div`
    text-align: center;
    padding: 0 3rem;
`;
const HeroTitleStyled = styled.h1`
    color: #fff;
    text-transform: uppercase;
    text-shadow: 0 0 0.4rem black;
    font-weight: 600;
    animation: ${Show} 1s linear;
    font-size: 3rem;
    letter-spacing: 0.5rem;
    @media only screen and (${devices.iphone14}) {
        font-size: 1.5rem;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 1.5rem;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 1.5rem;
        letter-spacing: 0.2rem;
    }
    @media only screen and (${devices.mobileP}) {
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
    }
`;
const HeroTextStyled = styled.p`
    color: #fff;
    
    `;
const HeroBtnStyled =  styled.a``;


const Hero = props => {
  return (
      <>
          <header className="header-hero" id='top'>
              <ContainerHero className="hero">
                  <ContainerHeroBanner className="hero-banner">

                      <HeroTitleStyled className="hero-title">
                          title hero
                      </HeroTitleStyled>

                      <HeroTextStyled className="hero-text">
                          Lorem ipsum dolor sit
                          amet consectetur
                          adipisicing elit.
                          Eveniet accusantium quas
                          est culpa sequi minus
                          voluptates porro
                          dignissimos amet dolor
                          veniam doloribus quos
                          ut.
                      </HeroTextStyled>

                      <HeroBtnStyled
                          href="#section-header"
                          className="hero-btn btn btn-light text-center font-weight-bold dark px-5 rounded-pill shadow"
                         
                      >
                          Ver mais
                      </HeroBtnStyled>
                  </ContainerHeroBanner>
              </ContainerHero>
          </header>
      </>
  );
}

Hero.propTypes = {}

export default Hero