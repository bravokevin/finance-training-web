import React, { useState } from 'react';

import Sidebar from '../components/SideBar/SideBar'
import Navbar from '../components/NavBarr/Nav'
import Hero from '../components/heroSection/Hero'
import Info from '../components/infoSection/Info';
import { homeObjOne, homeObjTree, homeObjTwo } from '../components/infoSection/Data';
import Services from '../components/Services/Services';


import { ServicesInfo } from '../components/Services/Services.info';
import Footer from '../components/footer/Footer';

import {animateScroll as scroll} from 'react-scroll'




const Home = () => {

    const ITEMS = ["about", "discover", "services", "sign Up"]
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

        const toggleHome = ()=>{
        scroll.scrollToTop();
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} items={ITEMS} />
            <Navbar toggle={toggle} items={ITEMS} toggleHome={toggleHome} />
            <Hero />
            <Info {...homeObjOne} />
            <Info {...homeObjTwo} />
            <Services info={ServicesInfo}/>
            <Info {...homeObjTree} />
            <Footer  toggleHome={toggleHome} />
        </>
    )

}

export default Home