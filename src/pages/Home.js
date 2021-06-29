import React, { useState } from 'react';

import Sidebar from '../components/SideBar/SideBar'
import Navbar from '../components/NavBarr/Nav'
import Hero from '../components/heroSection/Hero'
import Info from '../components/infoSection/Info';
import { homeObjFour, homeObjOne, homeObjTree, homeObjTwo } from '../components/infoSection/Data';






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
            <Info {...homeObjTree} />
        </>
    )

}

export default Home