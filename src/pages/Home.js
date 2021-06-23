import React, { Component, useState } from 'react';
import Sidebar from '../components/SideBar/SideBar'
import Navbar from '../components/NavBarr/Nav'
import Hero from '../components/heroSection/Hero'
import Info from '../components/infoSection/Data';






const Home = () => {

    const ITEMS = ["about", "discover", "services", "sign Up"]
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} items ={ITEMS} />
            <Navbar toggle={toggle} items={ITEMS}/>
            <Hero/>
            <Info/>
        </>
    )

}

export default Home