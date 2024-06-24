import React from 'react';
//import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { MdPerson } from 'react-icons/md';
import { GoCodescan } from 'react-icons/go';
import { MdOutlineMapsHomeWork } from 'react-icons/md';
import { IoSchoolOutline } from 'react-icons/io5';
import { GrProjects } from 'react-icons/gr';
import { HashLink } from 'react-router-hash-link';

const NavBar = props => {
    return (
        <>
            {['lg'].map(expand => (
                <Navbar
                    key={expand}
                    expand={expand}
                    sticky="top"
                    className="bg-dark mb-auto color-light shadow py-4"
                    data-bs-theme="dark"
                >
                    <Container fluid>
                        <HashLink
                            smooth="true"
                            to="/home#top"
                            style={{
                                textDecoration:
                                    'none'
                            }}
                            activestyle={{
                                fontWeight: 'bold'
                            }}
                        >
                            <Navbar.Brand>
                                Resume Sandro
                                Seivane
                            </Navbar.Brand>
                        </HashLink>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                            style={{
                                outline: 'none',
                                border: 'none',
                                boxShadow: 'none'
                            }}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            data-bs-theme="dark"
                        >
                            <Offcanvas.Header
                                closeButton
                            >
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    Sandro Seivane
                                    Resume
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <HashLink
                                        smooth="true"
                                        to="/home#section-about"
                                        className="HasLink active d-flex flex-row align-items-md-center justify-content-start px-4 py-2"
                                        title="ABOUT Me"
                                        activestyle={{
                                            fontWeight:
                                                'bold'
                                        }}
                                    >
                                        <MdPerson
                                            size="21"
                                            style={{
                                                marginRight:
                                                    '0.3rem'
                                            }}
                                        />
                                        About
                                    </HashLink>
                                    <HashLink
                                        smooth="true"
                                        to="/home#sectionprojects"
                                        className="HasLink d-flex flex-row align-items-md-center justify-content-start px-4 py-2"
                                        activestyle={{
                                            fontWeight:
                                                'bold'
                                        }}
                                    >
                                        <GoCodescan
                                            size="20"
                                            style={{
                                                marginRight:
                                                    '0.3rem'
                                            }}
                                        />
                                        Skills
                                    </HashLink>
                                    <HashLink
                                        smooth="true"
                                        to="/home#section-experience"
                                        className="HasLink d-flex flex-row align-items-md-center justify-content-start px-4 py-2"
                                        title="EXPERIENCE"
                                        activestyle={{
                                            fontWeight:
                                                'bold'
                                        }}
                                    >
                                        <MdOutlineMapsHomeWork
                                            size="20"
                                            style={{
                                                marginRight:
                                                    '0.3rem'
                                            }}
                                        />
                                        Experience
                                    </HashLink>
                                    <HashLink
                                        smooth="true"
                                        to="/home#section-education"
                                        className="HasLink d-flex flex-row align-items-md-center justify-content-start px-4 py-2"
                                        title="EDUCATION"
                                        activestyle={{
                                            fontWeight:
                                                'bold'
                                        }}
                                    >
                                        <IoSchoolOutline
                                            size="20"
                                            style={{
                                                marginRight:
                                                    '0.3rem'
                                            }}
                                        />
                                        Education
                                    </HashLink>
                                    <HashLink
                                        smooth="true"
                                        to="/home#section-projects"
                                        className="HasLink d-flex flex-row align-items-md-center justify-content-start px-4 py-2"
                                        title="PROJECTS"
                                        activestyle={{
                                            fontWeight:
                                                'bold'
                                        }}
                                    >
                                        <GrProjects
                                            size="18"
                                            style={{
                                                marginRight:
                                                    '0.3rem'
                                            }}
                                        />
                                        Projects
                                    </HashLink>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
};

NavBar.propTypes = {};

export default NavBar;
