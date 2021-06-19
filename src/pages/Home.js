import React, { Component } from 'react';
import Sidebar from '../components/SideBar/SideBar'
import Navbar from '../components/NavBarr/Nav'


class Home extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <Navbar />
            </>
        )
    }
}

export default Home