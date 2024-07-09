import React from 'react';
//import PropTypes from 'prop-types'
//import portrait from '../../images/portrait.jpg'
import Profile from './Profile';
import portraitColor from '../../images/portraitColor.jpg';
import dataProfile from '../../data/dataProfile';
import styled, {
    keyframes
} from 'styled-components';
import { devices } from '../../utils/constantes';

const Show = keyframes`
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

const ContainerSectionProfile = styled.div`
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
        margin: 0;
        padding: 0px;
    }
`;

const SectionProfile = props => {
    return (
        <ContainerSectionProfile className="section-profile">
            {dataProfile.map(data => (
                <Profile
                    key={data.id}
                    img={portraitColor}
                    cardtitle={data.job}
                    linkIn={data.linkIN}
                    linkGit={data.linkGit}
                    linkgmail={data.email}
                />
            ))}
        </ContainerSectionProfile>
    );
};

SectionProfile.propTypes = {};

export default SectionProfile;
