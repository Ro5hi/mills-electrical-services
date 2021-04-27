import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Dropdown = ({open, trigger }) => {
    return (
        <div className={open ? "grid grid-rows-4 w-screen text-center text-white items-center bg-blue-800" : "hidden" } onClick={trigger} >
            <Link smooth to="#home" className="p-4 hover:bg-gray-500 px-1 py-1">
                HOME
            </Link>
            <Link smooth to="#about" className="p-4 hover:bg-gray-500 px-1 py-1">
                ABOUT
            </Link>
            <Link smooth to="#contact" className="p-4 hover:bg-gray-500 px-1 py-1">
                CONTACT
            </Link>
        </div>
    )
}

export default Dropdown;