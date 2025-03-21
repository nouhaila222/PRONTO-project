import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const Layout = () => {
    return (
        <div className='h-screen max-h-screen flex flex-col' style={{
            fontFamily: '"Poppins", serif',
        }}>
            <Navbar />
            
            {/* Main Content */}
            <div className="flex-grow w-full">
                <Outlet />
            </div>

            
            <Footer />
        </div>
    );
};

export default Layout;
