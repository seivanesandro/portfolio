import React from 'react';
//import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card';

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
const TitleStyle = styled.h5`
    text-align: start;
    margin: 6px;
    animation: ${Show} 0.5s linear;
`;

const TitlesStyles = styled.label`
    display: block;
    font-weight: 700;
    width: 37rem;
    padding: 0.6rem;
    animation: ${Show} 0.5s linear;
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

const AboutDetails = ({
    title,
    name,
    address,
    email,
    phone,
    mainlanguage,
    secondlanguage
}) => {
    return (
        <>
            <TitleStyle>{title}</TitleStyle>
            <Card.Text>
                <TitlesStyles>
                    Nome:{' '}
                    <span
                        style={{
                            fontWeight: '400'
                        }}
                    >
                        {name}
                    </span>
                </TitlesStyles>
                <TitlesStyles>
                    Morada:{' '}
                    <span
                        style={{
                            fontWeight: '400'
                        }}
                    >
                        {address}
                    </span>
                </TitlesStyles>
                <TitlesStyles>
                    Email:{' '}
                    <span
                        style={{
                            fontWeight: '400'
                        }}
                    >
                        {email}
                    </span>
                </TitlesStyles>
                <TitlesStyles>
                    Telefone:{' '}
                    <span
                        style={{
                            fontWeight: '400'
                        }}
                    >
                        {phone}
                    </span>
                </TitlesStyles>
                <TitlesStyles>
                    Lingua Materna:{' '}
                    <span
                        style={{
                            fontWeight: '400'
                        }}
                    >
                        {mainlanguage}
                    </span>
                </TitlesStyles>
                <TitlesStyles>
                    Lingua Segundaria:{' '}
                    <span
                        style={{
                            fontWeight: '400'
                        }}
                    >
                        {secondlanguage}
                    </span>
                </TitlesStyles>
            </Card.Text>
        </>
    );
};

AboutDetails.propTypes = {};

export default AboutDetails;
