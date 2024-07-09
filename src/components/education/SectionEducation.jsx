import React from 'react';
import Education from './Education';
import dataEducation from '../../data/dataEducation';
import { Reveal } from 'react-gsap';
import { FadeInLeft } from '../../utils/FadeInLeft';
//import PropTypes from 'prop-types'
import styled from 'styled-components';
import { devices } from '../../utils/constantes';

const ContainerEducation = styled.div`
    @media only screen and (${devices.iphone14}) {
    }
    @media only screen and (${devices.mobileG}) {
    }
    @media only screen and (${devices.mobileM}) {
    }
    @media only screen and (${devices.mobileP}) {
    }
`;

const SectionEducation = () => {
    return (
        <>
            <h6>SectionEducation</h6>
            <Reveal
                repeat
                trigger={<ContainerEducation />}
            >
                <FadeInLeft>
                    <ContainerEducation>
                        {dataEducation.map(
                            data => (
                                <Education
                                    key={data.id}
                                    defaultkey={[
                                        data.id
                                    ]}
                                    accordiontitle={
                                        data.title
                                    }
                                    accordionlocal={
                                        data.local
                                    }
                                    accordiondate={
                                        data.date
                                    }
                                    accordionobjectives={
                                        data.objectives
                                    }
                                    accordionskills={
                                        data.skills
                                    }
                                    accordionstage={
                                        data.stage
                                    }
                                />
                            )
                        )}
                    </ContainerEducation>
                </FadeInLeft>
            </Reveal>
        </>
    );
};

SectionEducation.propTypes = {};

export default SectionEducation;
