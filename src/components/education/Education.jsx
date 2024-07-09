import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

//import PropTypes from 'prop-types'

const Education = ({
    defaultkey,
    accordiontitle,
    accordionobjectives,
    accordionskills,
    accordiondate,
    accordionlocal,
    accordionstage
}) => {
    return (
        <>
            <Accordion
                defaultActiveKey={[defaultkey]}
                flush
                className="container-accordion shadow"
            >
                <Accordion.Item className="border boder-dark">
                    <Accordion.Header className="accordion-header">
                        <h5 className="accordion-title">
                            {accordiontitle}
                        </h5>
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                        <div className="accordion-container-body-header">
                            <span className="accordion-date">
                                {accordiondate}
                            </span>
                            <span className="accordion-local">
                                {accordionlocal}
                            </span>
                        </div>
                        <div className="accordion-container-body-main">
                            <p className="accordion-objectives">
                                <strong>
                                    objectivos:
                                </strong>{' '}
                                {
                                    accordionobjectives
                                }
                            </p>
                            <span className="accordion-skills">
                                <strong>
                                    {' '}
                                    TechSkills:
                                </strong>{' '}
                                {accordionskills}
                            </span>
                            <span className="accordion-stage">
                                <strong>
                                    Estágio:
                                </strong>{' '}
                                {accordionstage}
                            </span>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

Education.propTypes = {};

export default Education;
