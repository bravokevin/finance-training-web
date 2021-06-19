import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './styles'

const SideBar = ({ isOpen, toggle, items }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {items.map((item, index) => (

                        <SidebarLink to={item} onClick={toggle}>
                            {item}
                        </SidebarLink>

                    ))}
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="./signIn">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar
