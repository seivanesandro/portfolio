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
                        <Navbar.Brand href="/">
                            Resume Sandro Seivane
                        </Navbar.Brand>
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
                                    <Nav.Link
                                        href="#action1"
                                        className="d-flex flex-row align-items-sm-start justify-content-start px-3"
                                        title="ABOUT Me"
                                    >
                                        <MdPerson
                                            size="21"
                                            style={{
                                                marginRight:
                                                    '0.3rem'
                                            }}
                                        />{' '}
                                        About
                                    </Nav.Link>
                                    <Nav.Link
                                        href="#action2"
                                        className="d-flex flex-row align-items-sm-start justify-content-start px-3"
                                        title="SKILLS"
                                    >
                                        <GoCodescan
                                            size="20"
                                            style={{
                                                marginRight:
                                                    '0.3rem'
                                            }}
                                        />
                                        Skills
                                    </Nav.Link>
                                    <Nav.Link
                                        href="#action3"
                                        className="d-flex flex-row align-items-sm-start justify-content-start px-3"
                                        title="EXPERIENCE"
                                    >
                                        <MdOutlineMapsHomeWork
                                            size="20"
                                            style={{
                                                marginRight:
                                                    '0.3rem'
                                            }}
                                        />
                                        Experience
                                    </Nav.Link>
                                    <Nav.Link
                                        href="#action4"
                                        className="d-flex flex-row align-items-sm-start justify-content-start px-3"
                                        title="EDUCATION"
                                    >
                                        <IoSchoolOutline
                                            size="20"
                                            style={{
                                                marginRight:
                                                    '0.3rem'
                                            }}
                                        />
                                        Education
                                    </Nav.Link>
                                    <Nav.Link
                                        href="#action5"
                                        className="d-flex flex-row align-items-sm-start justify-content-start px-3"
                                        title="PROJECTS"
                                    >
                                        <GrProjects
                                            size="18"
                                            style={{
                                                marginRight:
                                                    '0.3rem'
                                            }}
                                        />
                                        Projects
                                    </Nav.Link>
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
