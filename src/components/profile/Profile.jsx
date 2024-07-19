import React from 'react';
//import PropTypes from 'prop-types'

import CardLink from 'react-bootstrap/CardLink';
import Card from 'react-bootstrap/Card';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { RiProfileLine } from 'react-icons/ri';

import doc from '../../docs/CV_Sandro_Seivane_PT_2024.pdf';

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

const CardImg = styled.img`
    width: 100%;
    filter: grayscale(200%);
    animation: ${Show} 1ms linear;
    &:hover {
        filter: none;
    }
    @media only screen and (${devices.tablet}) {
        filter: none;
    }
    @media only screen and (${devices.iphone14}) {
        filter: none;
    }
    @media only screen and (${devices.mobileG}) {
        filter: none;
    }
    @media only screen and (${devices.mobileM}) {
        filter: none;
    }
    @media only screen and (${devices.mobileP}) {
        filter: none;
    }
`;

const Profile = ({
    img,
    cardtitle,
    linkIn,
    linkGit,
    linkgmail
}) => {
    return (
        <>
            <Card
                style={{ width: '18rem' }}
                className="rounded shadow"
            >
                <CardImg
                    src={img}
                    alt="sandro seivane"
                    title="sandro seivane"
                    className="card-top"
                />
                <Card.Body className="py-4">
                    <Card.Title className="h6 pb-4">
                        {cardtitle}
                    </Card.Title>
                    <CardLink
                        href={linkIn}
                        target="_blank"
                    >
                        <BsLinkedin
                            size={32}
                            className="hoverLink m-2"
                            title="go to my linkedIN"
                        />
                    </CardLink>
                    <CardLink
                        href={linkGit}
                        target="_blank"
                    >
                        <BsGithub
                            size={35}
                            className="git m-2"
                            title="go to my Github"
                        />
                    </CardLink>
                    <CardLink
                        href={`mailto:${linkgmail}`}
                    >
                        <SiGmail
                            size={35}
                            className="gmail m-2"
                            title="send me a e-mail"
                        />
                    </CardLink>
                    <CardLink
                        hrget="_blank"
                        rel="noreferrer"
                        href={doc}
                        download
                    >
                        <RiProfileLine
                            size={36}
                            className="cv m-2"
                            title="download my CV"
                        />
                    </CardLink>
                </Card.Body>
                {/* <Card.Footer className="text-center">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={doc}
                        download
                    >
                        <button
                            type="button"
                            className="btn m-3 btn-light"
                        >
                            Download CV
                        </button>
                    </a>
                </Card.Footer> */}
            </Card>
        </>
    );
};

Profile.propTypes = {};

export default Profile;
