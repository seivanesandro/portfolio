import React from 'react';
import Home from '../components/home/Home';
import NavBar from '../components/navbar/NavBar';
//import PropTypes from 'prop-types'

const Osp = props => {
    return (
        <>
            <NavBar />
            <Home />
        </>
    );
};

Osp.propTypes = {};

export default Osp;
