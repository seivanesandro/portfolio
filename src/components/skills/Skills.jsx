import React from 'react';
import ProgressBarSkill from './ProgressBar';
//import PropTypes from 'prop-types'
import styled from 'styled-components';

const ContainerProgressBarSkill = styled.div`

`;

const Skills = ({ skilltech, skillprogress }) => {
    return (
        <ContainerProgressBarSkill className='container-progressBar-skill'>
            <ProgressBarSkill
                techname={skilltech}
                progress={skillprogress}
            />
        </ContainerProgressBarSkill>
    );
};

Skills.propTypes = {}

export default Skills