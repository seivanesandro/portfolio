import React from 'react';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';

const Show = keyframes`
    from{
       opacity:0;
    }
    to{
        opacity:1;
    }
`;

const ContainerTitle = styled.div`
    margin: 5rem auto;
    text-align: center;
`;
const TitleStyle = styled.h3`
    color: #c1c1c1;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    font-weight: lighter;
    text-shadow: 0 0 0.1rem #000000;
    -webkit-text-stroke-width: 20rem coral;
    animation: ${Show} 2s ease-out;
`;

const Title = ({ title }) => {
    return (
        <>
            <ContainerTitle className="title-container">
                <TitleStyle className="title">
                    {title}
                </TitleStyle>
            </ContainerTitle>
        </>
    );
};

Title.propTypes = {};

export default Title;
