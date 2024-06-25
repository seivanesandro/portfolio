import React from 'react';
//import PropTypes from 'prop-types'
//import Card from 'react-bootstrap/Card';
import styled, {
    keyframes
} from 'styled-components';
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
const Title = styled.h5`
    text-align: start;
    margin: 6px;
    animation: ${Show} 0.5s linear;
`;

const ParagraphText = styled.p`
    width: 40rem;
    padding: 0.8rem;
    animation: ${Show} 0.5s linear;

    @media only screen and (${devices.portatil}) {
        width: 31rem;
        padding: 1rem;
    }
    @media only screen and (${devices.iphone14}) {
        text-align: start;
        width: 20rem;
    }
    @media only screen and (${devices.mobileG}) {
        text-align: start;
        width: 20rem;
    }
    @media only screen and (${devices.mobileM}) {
        text-align: start;
        width: 18rem;
    }
    @media only screen and (${devices.mobileP}) {
        text-align: start;
        width: 17rem;
    }
`;

const AboutDetails = ({ title, text }) => {
    return (
        <>
            <Title>{title}</Title>
            <ParagraphText>{text}</ParagraphText>
        </>
    );
};

AboutDetails.propTypes = {};

export default AboutDetails;
