import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({open, setOpen }) => {
    return (
        <div className={setOpen ? 
            "grid grid-rows-4 text-center items-center bg-blue-900"
            : "hidden" 
        } onClick={setOpen} >
            <Link to="/home" className="p-4">
                HOME
            </Link>
            <Link to="/about" className="p-4">
                ABOUT
            </Link>
            <Link to="/contact" className="p-4">
                CONTACT
            </Link>
        </div>
    )
}