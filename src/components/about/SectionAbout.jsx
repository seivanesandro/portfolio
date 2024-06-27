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

const ContainerSectionAbout = styled.div`
    margin: 5px;
    padding: 10px;

    animation: ${Show} 2s ease-in;
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
        margin: 0 !important;
        padding: 0px;
    }
`;

const SectionAbout = props => {
    return (
        <ContainerSectionAbout
           
            className="section-about"
        >
            {dataProfile.map(data => (
                <About
                    key={data.id}
                    textAboutme={data.aboutMe}
                    name={data.name}
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
