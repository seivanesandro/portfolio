import React from 'react';
import Projects from './Projects';
//import PropTypes from 'prop-types';
import dataProjects from '../../data/dataProject';

import { Reveal } from 'react-gsap';

import { FadeInRight } from '../../utils/FadeInRight';

import styled from 'styled-components';
import { devices } from '../../utils/constantes';

const ContainerPRojects = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    @media only screen and (${devices.iphone14}) {
        gap: 3rem;
        padding: 0;
        flex-direction: column;
        opacity: 1;
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

const SectionProjects = () => {
    return (
        <>
            <h6>SectionProjects</h6>
            <Reveal
                repeat
                trigger={<ContainerPRojects />}
            >
                <FadeInRight>
                    <ContainerPRojects className="container-project">
                        {dataProjects.map(
                            data => (
                                <Projects
                                    key={data.id}
                                    projectname={
                                        data.name
                                    }
                                    projecticon={
                                        data.icon
                                    }
                                    projectlink={
                                        data.link
                                    }
                                />
                            )
                        )}
                    </ContainerPRojects>
                </FadeInRight>
            </Reveal>
        </>
    );
};

SectionProjects.propTypes = {};

export default SectionProjects;
