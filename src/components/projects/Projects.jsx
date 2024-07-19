import React from 'react';
//import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const ContainerProjects = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
`;

const ProjectLink = styled.a`
    text-decoration: none;
    color: #333 !important;
`;

const Projects = ({
    projectname,
    projecticon,
    projectlink
}) => {
    return (
        <>
            <ContainerProjects className="project">
                {['Info'].map(variant => (
                    <Card
                        bg={variant.toLowerCase()}
                        key={variant}
                        className="container-card-style shadow"
                    >
                        <Card.Body className="card-style">
                            <ProjectLink
                                href={projectlink}
                                target="_blank"
                                rel="noreferrer"
                                className="card-link-style"
                            >
                                <Card.Title className="title-animation">
                                    {projectname}
                                </Card.Title>
                                <Card.Text className="text-animation">
                                    {projecticon}
                                </Card.Text>
                            </ProjectLink>
                        </Card.Body>
                    </Card>
                ))}
            </ContainerProjects>
        </>
    );
};

Projects.propTypes = {};

export default Projects;
