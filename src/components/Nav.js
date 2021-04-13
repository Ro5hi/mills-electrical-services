import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Nav = ({ trigger }) => {

    return (
        <div className="bg-blue-900 w-screen">
            <nav className="flex fixed justify-between items-center h-16 bg-blue-900 text-white
            relative font-mono" role="navigation">
                <Link to="/" className="pl-8">
                    MILLS ELECTRICAL SERVICES
                </Link>
                <div className="px-4 cursor-pointer md:hidden" onClick={trigger}>
                <svg 
                    className="w-6 h-6" 
                    fill="none" stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </div>
                <div className="pr-8 md:block hidden">
                    <Link smooth to="#" className="p-4 hover:bg-gray-500 px-1 py-1">
                        HOME
                    </Link>
                    <Link smooth to="#about" className="p-4 hover:bg-gray-500 px-1 py-1">
                        ABOUT
                    </Link>
                    <Link smooth to="#contact" className="p-4 hover:bg-gray-500 px-1 py-1">
                        CONTACT
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav;