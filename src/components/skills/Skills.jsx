import React from 'react';
import ProgressBarSkill from './ProgressBar';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';

const Animation = keyframes`
   0%{ 
        opacity: 0;
    }
    50%{opacity: 0.5}
    100%{ 
         opacity: 1;
    }
`;
const ContainerProgressBarSkill = styled.div`
    animation: ${Animation} 2s linear;
    margin: 4rem 0 0 0;
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
