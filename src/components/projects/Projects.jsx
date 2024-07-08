import React from 'react'
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
    color: #333;
    cursor: pointer;
`;

const ProjectLink = styled.a`
    text-decoration: none;
    color: #333;
    font-weight: 700;
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
                        text={
                            variant.toLowerCase() ===
                            'info'
                                ? 'dark'
                                : 'white'
                        }
                        style={{ width: '18rem' }}
                        className="mb-2 shadow"
                    >
                        <Card.Body>
                        <ProjectLink
                                    href={
                                        projectlink
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                >
                            <Card.Title>
                                {variant}
                                {projectname}
                            </Card.Title>
                            <Card.Text>
                                
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

Projects.propTypes = {}

export default Projects