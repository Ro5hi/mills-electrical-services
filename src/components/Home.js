import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Dropdown from './Dropdown'
import Hero from './Hero'
import About from './About'
import Motto from './Motto'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {

  const [open, setOpen] = useState(false)

  const trigger = () => {
    setOpen(!open)
  };

  useEffect(() => {
    const hiddenMenu = () => {
      if (window.innerWidth > 768 && open) {
        setOpen(false);
      }
    };

  window.addEventListener('resize', hiddenMenu);

    return () => {
        window.removeEventListener('resize', hiddenMenu);
    };
    });


    return (
        <div className="justify-center justify-items-center">
            <div className="flex flex-col">
                <Nav trigger={trigger} />
                <Dropdown open={open} trigger={trigger} />
                <Hero />
                <About />
                <Motto />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default Home;