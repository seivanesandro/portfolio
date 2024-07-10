import React from 'react';
import Osp from './page/Osp';
//import styled from 'styled-components';
//import NavBar from './components/navbar/NavBar';

/* 
    FIXMEput menu on center
const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`; */

const App = () => {
    return (
        <div className="App">
            <Osp />
        </div>
    );
};

export default App;
