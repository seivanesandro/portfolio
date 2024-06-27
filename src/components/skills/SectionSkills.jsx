import React from 'react';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';
import Skills from './Skills';
import { devices } from '../../utils/constantes';

const ShowAnimation = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0.5;
        animation:  1ms ease-in-out;
    }

    100%{
        opacity:1;
        animation: 1ms ease-in-out;
    }
`;

const AnimationFirstColumn = keyframes`
    0%{
        opacity:0;
        position: relative;
        left: -15px;
    }
    50%{
        left: 0;
        opacity:0.5;
        animation:  1ms ease-in-out;
    }

    100%{
        opacity:1;
        animation: 1ms ease-in-out;
    }
`;

const AnimationSecondColumn = keyframes`
    0%{
        opacity:0;
        position: relative;
        right: -15px;
    }
    50%{
        right: 0;
        opacity:0.5;
        animation:  1ms ease-in-out;
    }

    100%{
        opacity:1;
        animation: 1ms ease-in-out;
    }
`;

const ContainerSkills = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    padding: 10px;

    animation: ${ShowAnimation} 3.1s linear;

    border: 1px solid blue;
    @media only screen and (${devices.portatil}) {
    }
    @media only screen and (${devices.tablet}) {
    }
    @media only screen and (${devices.iphone14}) {
    }
    @media only screen and (${devices.mobileG}) {
    }
    @media only screen and (${devices.mobileM}) {
    }
    @media only screen and (${devices.mobileP}) {
    }
`;
const ContainerFirstColumn = styled.div`
    animation: ${AnimationFirstColumn} 3.1s
        ease-in;

    border: 1px solid blue;
`;
const ContainerSecondColumn = styled.div`
    animation: ${AnimationSecondColumn} 3.1s
        ease-in;

    border: 1px solid blue;
`;

const SectionSkills = () => {
    return (
        <div className="section-skills">
            <h6>SectionSkills</h6>
            <ContainerSkills className="skills">
                <ContainerFirstColumn className="container-first-column">
                    <Skills
                        skilltech="skill example"
                        skillprogress={100}
                    />
                    <Skills
                        skilltech="skill example"
                        skillprogress={80}
                    />
                    <Skills
                        skilltech="skill example"
                        skillprogress={90}
                    />
                    <Skills
                        skilltech="skill example"
                        skillprogress={89}
                    />
                </ContainerFirstColumn>
                <ContainerSecondColumn className="container-second-column">
                    <Skills
                        skilltech="skill example"
                        skillprogress={80}
                    />
                    <Skills
                        skilltech="skill example"
                        skillprogress={90}
                    />
                    <Skills
                        skilltech="skill example"
                        skillprogress={89}
                    />
                    <Skills
                        skilltech="skill example"
                        skillprogress={100}
                    />
                </ContainerSecondColumn>
            </ContainerSkills>
        </div>
    );
};

SectionSkills.propTypes = {};

export default SectionSkills;
