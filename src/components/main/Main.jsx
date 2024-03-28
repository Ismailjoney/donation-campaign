import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
 

const Main = () => {
    return (
        <div >
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;