import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
const Layout = () => {
    return (
        <div className='h-screen max-h-screen' style={{
            fontFamily: ' "Poppins", serif',
        }}>
            <Navbar />  
            <div className="w-full   h-11/12">
                <Outlet />
            </div>

        </div>
    )
}

export default Layout
