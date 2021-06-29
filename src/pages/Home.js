import React, { useState } from 'react';

import Sidebar from '../components/SideBar/SideBar'
import Navbar from '../components/NavBarr/Nav'
import Hero from '../components/heroSection/Hero'
import Info from '../components/infoSection/Info';
import { homeObjOne, homeObjTree, homeObjTwo } from '../components/infoSection/Data';
import Services from '../components/Services/Services';






const Home = () => {

    const ITEMS = ["about", "discover", "services", "sign Up"]
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} items={ITEMS} />
            <Navbar toggle={toggle} items={ITEMS} />
            <Hero />
            <Info {...homeObjOne} />
            <Info {...homeObjTwo} />
            <Services/>
            <Info {...homeObjTree} />
        </>
    )

}

export default Home