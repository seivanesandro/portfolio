import React from 'react';
import Home from '../components/home/Home';
import NavBar from '../components/navbar/NavBar';
import Hero from '../components/hero/Hero';
//import PropTypes from 'prop-types'

const Osp = props => {
    return (
        <>
            <NavBar />
            <Hero />
            <Home />
        </>
    );
};

Osp.propTypes = {};

export default Osp;
