import React from 'react';
import TopMenuBar from '../../components/top-menu-bar/TopMenuBar';
import MenuBar from '../components/MenuBar';
import Cart from '../components/Cart';

const MainScreen = ({ children }) => {
    return (
        <div>
            <TopMenuBar />
            <div className="content">
                <div className="main-content">
                    <MenuBar />
                    {children}
                    <Cart />
                </div>
            </div>
        </div>
    );
};

export default MainScreen;
