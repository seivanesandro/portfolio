import React from 'react';
//import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components';

const Show = keyframes`
    0%{
        opacity:0;
        position: relative;
        right: -15px;
    }
    50%{
        right: 0;
        opacity:0.5;
        animation:  1ms ease-in-out;
    }

    100%{
        opacity:1;
        animation: 1ms ease-in-out;
    }
`;
const ContainerSectionProjects = styled.div`
    animation: ${Show} 2s ease-in;
`; 
const SectionProjects = props => {
    return (
        <div>
            <ContainerSectionProjects className="section-projects">
                <h6>SectionProjects</h6>
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Nesciunt minima odio est,
                architecto vel iste aspernatur.
                Natus fuga similique animi
                doloribus, minima laboriosam hic,
                provident dolores ab ipsum aliquam
                fugiat? Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Possimus repellat fugiat maiores
                id voluptate incidunt doloremque
                tenetur, rem, in voluptatem a
                laudantium optio tempore omnis,
                distinctio ad aut expedita. Quod!
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
                Dolorem sapiente provident omnis
                maxime dolor. Iste voluptatibus
                cum consequatur tempore quaerat
                doloremque aliquam? Beatae
                cupiditate et natus dolorem harum
                dolore voluptatem! Lorem ipsum
                dolor sit amet consectetur
                adipisicing elit. Quam unde quis
                laudantium rem repellendus
                expedita. Et impedit possimus
                sequi illo, ducimus recusandae
                voluptas fugit voluptate?
                Repudiandae ipsum iure voluptatum
                consectetur.
            </ContainerSectionProjects>
        </div>
    );
};

SectionProjects.propTypes = {};

export default SectionProjects;
