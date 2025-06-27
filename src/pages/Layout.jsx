// components/Layout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import CustomCursor from '../components/common/CustomCursor';

const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <CustomCursor />
            <nav className="flex-1 ">
                <Navbar />
            </nav>
            <main className="flex-1">
                <Outlet />
            </main>
            <footer className=''>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
