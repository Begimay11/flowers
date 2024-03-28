import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from '../pages/Admin/Admin';
import Registr from '../pages/Register/Registr';

const RoutesLink = () => {
    return (
        <div>
            <Routes>
                <Route path='regis' element={<Registr/>}/>
                <Route path='admin' element={<Admin/>}/>
            </Routes>
        </div>
    );
};

export default RoutesLink;