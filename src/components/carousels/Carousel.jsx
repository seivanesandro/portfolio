import colorImage1 from '../../images/colorImage1.jpg';
import colorImage2 from '../../images/colorImage2.jpg';
import doc from '../../docs/CV_Sandro_Seivane_PT_2024.pdf';

import Carousel from 'react-bootstrap/Carousel';

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

const ImgStyle = styled.img`
    filter: grayscale(200%);
    animation: ${Show} 2.5s linear;
    max-height: 50% !important;
    &:hover {
        filter: none;
    }

    @media only screen and (${devices.tablet}) {
        width: 100%;
    }
    @media only screen and (${devices.iphone14}) {
        width: 100%;
    }
    @media only screen and (${devices.mobileG}) {
        width: 100%;
    }
    @media only screen and (${devices.mobileM}) {
        width: 100%;
    }
    @media only screen and (${devices.mobileP}) {
        width: 100%;
    }
`;

const TitleStyle = styled.h5`
    font-size: 2.5rem;
    text-align: left;
    animation: ${Show} 3s linear;
    &:hover {
        color: #fff;
        background: #333;
    }
    &::selection {
        color: #fff;
        background: #333;
    }
    @media only screen and (${devices.iphone14}) {
        display: none;
    }
    @media only screen and (${devices.mobileG}) {
        display: none;
    }
    @media only screen and (${devices.mobileM}) {
        display: none;
    }
    @media only screen and (${devices.mobileP}) {
        display: none;
    }
`;
const ParagraphStyle = styled.p`
    font-size: 1.5rem;
    text-align: left;
    animation: ${Show} 3.1s linear;
    &:hover {
        color: #fff;
        background: #333;
    }
    &::selection {
        color: #fff;
        background: #333;
    }
    @media only screen and (${devices.iphone14}) {
        font-size: 1rem;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 1rem;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 1rem;
    }
    @media only screen and (${devices.mobileP}) {
        font-size: 1rem;
    }
`;

function DarkVariantExample() {
    return (
        <Carousel
            data-bs-theme="dark"
            className="carousel-container"
        >
            <Carousel.Item>
                <ImgStyle
                    src={colorImage1}
                    alt="First slide"
                    className="d-block"
                />
                <Carousel.Caption
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start'
                    }}
                >
                    <TitleStyle>
                        Olá, eu sou o Sandro,
                    </TitleStyle>
                    <ParagraphStyle>
                        Junior Front-End Developer
                    </ParagraphStyle>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={doc}
                        download
                    >
                        <button
                            type="button"
                            className="btn m-3 btn-dark"
                        >
                            Download CV
                        </button>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ImgStyle
                    src={colorImage2}
                    alt="Second slide"
                    className="d-block"
                />
                <Carousel.Caption
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start'
                    }}
                >
                    <TitleStyle>
                        Eu sou um React Developer,
                    </TitleStyle>
                    <ParagraphStyle>
                        com Dedicação,
                        Criatividade e vontade de
                        criar e aprender mais.
                    </ParagraphStyle>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={doc}
                        download
                    >
                        <button
                            type="button"
                            className="btn m-3 btn-dark"
                        >
                            Download CV
                        </button>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;
