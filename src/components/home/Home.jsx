import React from 'react';
//import PropTypes from 'prop-types'
import SectionAbout from '../about/SectionAbout';
import SectionSkills from '../skills/SectionSkills';
import SectionExperience from '../experience/SectionExperience';
import SectionEducation from '../education/SectionEducation';
import SectionProjects from '../projects/SectionProjects';
import SectionProfile from '../profile/SectionProfile';
//import SectionCarousel from '../carousels/SectionCarousel';

import styled from 'styled-components';
import { devices } from '../../utils/constantes';

import { Reveal } from 'react-gsap';
import { FadeInLeft } from '../../utils/FadeInLeft';
//import { FadeInRight } from '../../utils/FadeInRight';
//import { FadeIn} from './FadeIn'

const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    margin: 0.2rem auto;
`;
const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    gap: 0;
    /*  padding: 4.8rem; */

    @media only screen and (${devices.portatil}) {
        padding: 0;
        gap: 1rem;
    }
    @media only screen and (${devices.tablet}) {
        flex-direction: column;
        padding: 0;
        align-items: center;
        gap: 1rem;
    }
    @media only screen and (${devices.iphone14}) {
        flex-direction: column;
        padding: 0;
        align-items: center;
        gap: 3rem;
    }
    @media only screen and (${devices.mobileG}) {
        flex-direction: column;
        padding: 0;
        align-items: center;
        gap: 3rem;
    }
    @media only screen and (${devices.mobileM}) {
        flex-direction: column;
        padding: 0;
        align-items: center;
        gap: 3rem;
    }
    @media only screen and (${devices.mobileP}) {
        flex-direction: column;
        padding: 0;
        align-items: center;
        gap: 3rem;
    }
`;

const Home = props => {
    return (
        <ContainerHome className="main">
            {/*  <div className="container-caroussel">
                <SectionCarousel />
            </div> */}
            <div
                id="section-header"
                className="header-container"
            >
                <Reveal
                    repeat
                    trigger={<ContainerHeader />}
                >
                    <FadeInLeft>
                        <ContainerHeader>
                            <SectionProfile />
                            <SectionAbout />
                        </ContainerHeader>
                    </FadeInLeft>
                </Reveal>
            </div>

            <div id="section-skills">
                <SectionSkills />
            </div>

            <div id="section-experience">
                <SectionExperience />
            </div>
            <div id="section-education">
                <SectionEducation />
            </div>
            <div id="section-projects">
                <SectionProjects />
            </div>
            {/* 
            <div
                style={{ height: '10rem' }}
            ></div> */}
        </ContainerHome>
    );
};

Home.propTypes = {};

export default Home;
