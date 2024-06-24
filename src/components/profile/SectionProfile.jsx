import React from 'react';
//import PropTypes from 'prop-types'
import portrait from '../../images/portrait.jpg'
import Profile from './Profile';

const SectionProfile = props => {
    return (
        <div
            id="section-profile"
            className="section-profile"
        >
            <h6>SectionProfile</h6>
            <Profile />

        </div>
    );
};

SectionProfile.propTypes = {};

export default SectionProfile;
