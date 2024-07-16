import React, { useState } from 'react';
//import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import AboutDetails from './AboutDetails';
import PersonalInfo from './PersonalInfo';
import styled, {
    keyframes
} from 'styled-components';
import { devices } from '../../utils/constantes';

const Show = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0.5;
    }
    100%{
        opacity:1;
    }
`;

const TitleBeginning = styled.h5`
    width: 18rem;
    text-align: center;
    margin: 6.3rem auto;
    animation: ${Show} 1ms linear;
    @media only screen and (${devices.mobileP}) {
        width: 17rem;
    }
`;

const About = ({
    name,
    address,
    email,
    phone,
    mainlanguage,
    secondlanguage,
    textAboutme
}) => {
    const [aboutMe, setAboutMe] = useState(false);
    const [personalInfo, setPersonalInfo] = useState(false);

    const handleAbout = () => {
        setAboutMe(true);
        setPersonalInfo(false);
    };
    const handlePersonalInfo = () => {
        setPersonalInfo(true);
        setAboutMe(false);
    };
    return (
        <>
            <Card
                // style={{ width: '22rem' }}
                className="card-about rounded shadow"
            >
                <Card.Header>
                    <Nav
                        variant="tabs"
                        defaultActiveKey="#first"
                    >
                        <Nav.Item>
                            <Nav.Link
                                href="#first"
                                onClick={
                                    handlePersonalInfo
                                }
                            >
                                Informação
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                href="#link"
                                onClick={
                                    handleAbout
                                }
                            >
                                Sobre mim
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    {!aboutMe &&
                        !personalInfo && (
                            <TitleBeginning>
                                "Tenho mais de 20
                                anos em
                                informática e sei
                                lidar com
                                computadores,
                                softwares e
                                programação!"
                            </TitleBeginning>
                        )}
                    {aboutMe && (
                        <AboutDetails
                            title="QUEM SOU EU?"
                            text={textAboutme}
                        />
                    )}
                    {personalInfo && (
                        <PersonalInfo
                            title="INFORMAÇÃO PESSOAL"
                            name={name}
                            address={address}
                            email={email}
                            phone={phone}
                            mainlanguage={
                                mainlanguage
                            }
                            secondlanguage={
                                secondlanguage
                            }
                        />
                    )}
                </Card.Body>
            </Card>
        </>
    );
};

About.propTypes = {};

export default About;
