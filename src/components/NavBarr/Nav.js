import React from 'react'
import { FaBars } from 'react-icons/fa'


import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './styles'

const NAVITEMS = ["about", "discover", "services", "sign Up"]

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Dollar</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        {NAVITEMS.map((item, index) => (
                            <NavItem>
                                <NavLinks to={item}>
                                    {item}
                                </NavLinks>
                            </NavItem>
                        ))}

                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
