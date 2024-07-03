import React from 'react';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';
import Skills from './Skills';
import { devices } from '../../utils/constantes';
import dataSkills from '../../data/dataSkills';

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
                    {dataFirstColumn.map(data => (
                        <Skills
                            key={data.id}
                            skilltech={data.skill}
                            skillprogress={
                                data.value
                            }
                        />
                    ))}
                </div>
                <div className="container-second-column">
                    {dataSecondColumn.map(
                        data => (
                            <Skills
                                key={data.id}
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
