import React from 'react';
import ProgressBarSkill from './ProgressBar';
//import PropTypes from 'prop-types'

const Skills = ({ skilltech, skillprogress }) => {
    return (
        <div className="container-progressBar-skill">
            <ProgressBarSkill
                techname={skilltech}
                progress={skillprogress}
            />
        </div>
    );
};

Skills.propTypes = {};

export default Skills;
