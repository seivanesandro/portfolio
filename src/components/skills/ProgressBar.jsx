import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgressBarSkill = ({
    techname,
    progress
}) => {
    return (
        <ProgressBar
            animated
            now={progress}
            label={techname}
            variant="primary"
            style={{
                width: '25rem',
                margin: '5rem 3rem',
                height: '0.9rem',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textShadow: '0 0 0.1rem black'
            }}
        />
    );
};

export default ProgressBarSkill;
