import React from 'react';
import "./Main.css"
import Heder from '../Header/Heder';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {

    return (
        <div>

            <Heder></Heder>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;