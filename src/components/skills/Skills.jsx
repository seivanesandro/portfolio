import React from 'react';
import ProgressBarSkill from './ProgressBar';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';

const Animation = keyframes`
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
const ContainerProgressBarSkill = styled.div`
    border: 1px solid blue;
`;

const Skills = ({ skilltech, skillprogress }) => {
    return (
        <ContainerProgressBarSkill className="container-progressBar-skill">
            <ProgressBarSkill
                techname={skilltech}
                progress={skillprogress}
            />
        </ContainerProgressBarSkill>
    );
};

Skills.propTypes = {};

export default Skills;
