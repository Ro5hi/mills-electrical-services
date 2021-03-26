import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Dropdown = ({open, trigger }) => {
    return (
        <div className={open ? 
            "grid grid-rows-4 text-center text-white items-center bg-blue-900"
            : "hidden" 
        } onClick={trigger} >
            <Link smooth to="#home" className="p-4">
                HOME
            </Link>
            <Link smooth="#about" className="p-4">
                ABOUT
            </Link>
            <Link smooth="#contact" className="p-4">
                CONTACT
            </Link>
        </div>
    )
}

export default Dropdown;