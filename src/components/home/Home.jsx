import React from 'react';
//import PropTypes from 'prop-types'
// import SectionAbout from '../about/SectionAbout';
// import SectionSkills from '../skills/SectionSkills';
// import SectionExperience from '../experience/SectionExperience';
// import SectionEducation from '../education/SectionEducation';
// import SectionProjects from '../projects/SectionProjects';
// import SectionProfile from '../profile/SectionProfile';
import SectionCarousel from '../carousels/SectionCarousel';

import styled from 'styled-components';

const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;
    margin: 4rem auto;
`;
const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`;

const Home = props => {
    return (
        <ContainerHome className="border boder-primary">
            <SectionCarousel />
            <ContainerHeader className="header-container">
                {/* <SectionProfile />
                <SectionAbout /> */}
            </ContainerHeader>
            {/*  <SectionSkills />
            <SectionExperience />
            <SectionEducation />
            <SectionProjects /> */}
        </ContainerHome>
    );
};

Home.propTypes = {};

export default Home;
