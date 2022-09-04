import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu,
SidebarLink } from './SideBarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/servicos" onClick={toggle}>
            Serviços
          </SidebarLink>
          <SidebarLink to="/sobre" onClick={toggle}>
            Sobre Nós
          </SidebarLink>
          <SidebarLink to="contato" onClick={toggle}>
            Fale Conosco
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
 