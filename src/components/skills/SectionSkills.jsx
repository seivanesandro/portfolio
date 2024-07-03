import React from 'react';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';
import Skills from './Skills';
import { devices } from '../../utils/constantes';
import dataSkills from '../../data/dataSkills';
import { Reveal } from 'react-gsap';
import { ShowIn } from '../../utils/ShowIn';

const ShowAnimation = keyframes`
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
const ShowFirstColumnAnimation = keyframes`
    0%{
        position: relative;
        left: -5rem;
        animation: 1ms ease-in;
    }
    50%{
        left: 0rem;
        animation: 2ms ease-in;
    }
    100%{
        left: 0;
        animation: 5ms ease-in;
    }
`;
const ShowSecondColumnAnimation = keyframes`
    0%{
        position: relative;
        right: -5rem;
        animation:  1ms ease-in;
    }
    50%{
        right: 0rem;
        animation: 2ms ease-in;
    }
    100%{
        right: 0;
        animation: 5ms ease-in;
    }
`;

const ContainerSkills = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10rem;
    padding: 10px;
    border: 1px solid blue; //TODO: delete on end

    @media only screen and (${devices.fourk}) {
        gap: 10rem;
    }
    @media only screen and (${devices.portatilL}) {
        gap: 8rem;
    }
    @media only screen and (${devices.portatil}) {
        gap: 7rem;
    }

    @media only screen and (${devices.tablet}) {
        padding: 0;
        gap: 3rem;
    }
    @media only screen and (${devices.iphone14}) {
        gap: 3rem;
        padding: 0;
        flex-direction: column;
    }
    @media only screen and (${devices.mobileG}) {
        gap: 3rem;
        padding: 0;
        flex-direction: column;
    }
    @media only screen and (${devices.mobileM}) {
        gap: 3rem;
        padding: 0;
        flex-direction: column;
    }
    @media only screen and (${devices.mobileP}) {
        gap: 3rem;
        padding: 0;
        flex-direction: column;
    }
`;
const ContainerFirstColumn = styled.div`
    animation: ${ShowFirstColumnAnimation} 2s ease-in;
    border: 1px solid blue; //TODO: delete on end
`;
const ContainerSecondColumn = styled.div`
    animation: ${ShowSecondColumnAnimation} 2s ease-in;
    border: 1px solid blue; //TODO: delete on ends
`;

const SectionSkills = () => {
    const dataFirstColumn = dataSkills.slice(
        0,
        6
    );
    const dataSecondColumn = dataSkills.slice(
        6,
        12
    );
    return (
        <>
            <h6>SectionSkills</h6>

                    <ContainerSkills className="skills">
                        <div className="container-first-column">
                            {dataFirstColumn.map(
                                data => (
                                    <Skills
                                        key={
                                            data.id
                                        }
                                        skilltech={
                                            data.skill
                                        }
                                        skillprogress={
                                            data.value
                                        }
                                    />
                                )
                            )}
                        </div>
                        <div className="container-second-column">
                            {dataSecondColumn.map(
                                data => (
                                    <Skills
                                        key={
                                            data.id
                                        }
                                        skilltech={
                                            data.skill
                                        }
                                        skillprogress={
                                            data.value
                                        }
                                    />
                                )
                            )}
                        </div>
                    </ContainerSkills>

        </>
    );
};

SectionSkills.propTypes = {};

export default SectionSkills;
