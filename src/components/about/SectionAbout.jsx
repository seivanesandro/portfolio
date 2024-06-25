import React from 'react';
//import PropTypes from 'prop-types'
import About from './About';
import styled, {
    keyframes
} from 'styled-components';
import dataProfile from '../../data/dataProfile';
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

const ContainerSectionAbout = styled.div`
    margin: 5px;
    padding: 10px;
    border: 1px solid blue;

    animation: ${Show} 2.5s linear;
    @media only screen and (${devices.portatil}) {
        margin: 3px;
    }
    @media only screen and (${devices.tablet}) {
        margin: 3px;
    }
    @media only screen and (${devices.iphone14}) {
        margin: 3px;
    }
    @media only screen and (${devices.mobileG}) {
        margin: 3px;
    }
    @media only screen and (${devices.mobileM}) {
        margin: 3px;
    }
    @media only screen and (${devices.mobileP}) {
        margin: auto;
    }
`;

const SectionAbout = props => {
    return (
        <ContainerSectionAbout
            id="section-about"
            className="section-about"
        >
            <h6>SectionAbout</h6>
            {dataProfile.map(data => (
                <About
                    key={data.id}
                    textAboutme={data.aboutMe}
                    address={data.address}
                    email={data.email}
                    phone={data.phone}
                    mainlanguage={
                        data.firstLanguage
                    }
                    secondlanguage={
                        data.secondLanguage
                    }
                />
            ))}
        </ContainerSectionAbout>
    );
};

SectionAbout.propTypes = {};

export default SectionAbout;
