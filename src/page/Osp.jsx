import React from 'react';
import Home from '../components/home/Home';
import NavBar from '../components/navbar/NavBar';
//import PropTypes from 'prop-types'

const Osp = props => {
    return (
        <div>
            <NavBar />
            <Home />
        </div>
    );
};

Osp.propTypes = {};

export default Osp;
