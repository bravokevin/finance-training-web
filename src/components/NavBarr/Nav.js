import React from 'react'
import { FaBars } from 'react-icons/fa'


import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './styles'


const Navbar = ({toggle, items}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Dollar</NavLogo>
                    <MobileIcon  onClick = {toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        {items.map((item, index) => (
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
