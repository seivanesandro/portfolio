import React from 'react';
//import PropTypes from 'prop-types'
import TimeLine from './TimeLine';

const SectionExperience = props => {
    return (
        <div className="section-experience">
            <h6 id="experience">
                Section Experience
            </h6>
            <TimeLine />
        </div>
    );
};

SectionExperience.propTypes = {};

export default SectionExperience;
