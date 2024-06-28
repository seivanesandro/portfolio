import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgressBarSkill = ({
    techname,
    progress
}) => {
    return (
        <ProgressBar
            animated={true}
            now={progress}
            label={techname}
            variant="primary"
            className="breakpoints"
        />
    );
};

export default ProgressBarSkill;
