import React from 'react';
//import PropTypes from 'prop-types'
import SectionAbout from '../about/SectionAbout';
import SectionSkills from '../skills/SectionSkills';
import SectionExperience from '../experience/SectionExperience';
import SectionEducation from '../education/SectionEducation';
import SectionProjects from '../projects/SectionProjects';
import SectionProfile from '../profile/SectionProfile';
import SectionCarousel from '../carousels/SectionCarousel';

import styled from 'styled-components';
import { devices } from '../../utils/constantes';

import { Reveal } from 'react-gsap';
import { FadeInLeft } from './FadeInLeft';

const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    margin: auto;
`;
const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    gap: 8rem;
    padding: 4.8rem;

    border: 1px solid blue;

    @media only screen and (${devices.portatil}) {
        padding: 0;
        gap: 2rem;
    }
    @media only screen and (${devices.tablet}) {
        flex-direction: column;
        padding: 0;
        align-items: center;
        gap: 3rem;
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
        <ContainerHome
            id="top"
            className="main border boder-primary"
        >
            <SectionCarousel />

            <Reveal repeat trigger={<div />}>
                <FadeInLeft>
                    <ContainerHeader id="section-header">
                        <SectionProfile />
                        <SectionAbout />
                    </ContainerHeader>
                </FadeInLeft>
            </Reveal>

            <div id="section-skills">
                <SectionSkills />
            </div>

            <div id="section-experience">
                <SectionExperience />
            </div>

            <Reveal repeat trigger={<div />}>
                <FadeInLeft>
                    <div id="section-education">
                        <SectionEducation />
                    </div>
                </FadeInLeft>
            </Reveal>

            <Reveal repeat trigger={<div />}>
                <FadeInLeft>
                    <div id="section-projects">
                        <SectionProjects />
                    </div>
                </FadeInLeft>
            </Reveal>
        </ContainerHome>
    );
};

Home.propTypes = {};

export default Home;
