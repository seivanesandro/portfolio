import React from 'react';
import Projects from './Projects';
//import PropTypes from 'prop-types';
import dataProjects from '../../data/dataProject';

import { Reveal } from 'react-gsap';

//import { FadeInLeft } from '../../utils/FadeInLeft';

import styled from 'styled-components';
import { devices } from '../../utils/constantes';
import { FadeInRight } from '../../utils/FadeInRight';

const ContainerProjects = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center !important;
    justify-content: center !important;
    gap: 4rem;

    margin: 0 11px;
    @media only screen and (${devices.iphone14}) {
        gap: 3rem;
        padding: 0;
        flex-direction: column;
        opacity: 1 !important;
    }
    @media only screen and (${devices.mobileG}) {
        gap: 3rem;
        padding: 0;
        flex-direction: column;
        opacity: 1 !important;
    }
    @media only screen and (${devices.mobileM}) {
        gap: 3rem;
        padding: 0;
        flex-direction: column;
        opacity: 1 !important;
    }
    @media only screen and (${devices.mobileP}) {
        gap: 3rem;
        padding: 0;
        margin: 0;
        flex-direction: column;
        opacity: 1 !important;
    }
`;
const SectionProjects = () => {
    return (
        <>
            <Reveal
                repeat
                trigger={<ContainerProjects />}
            >
                <FadeInRight>
                    <ContainerProjects className="container-project">
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
                    </ContainerProjects>
                </FadeInRight>
            </Reveal>
        </>
    );
};

SectionProjects.propTypes = {};

export default SectionProjects;