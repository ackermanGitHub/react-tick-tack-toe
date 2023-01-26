import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 8px #00000026;
  z-index: 10;
`;

export const SidebarToggle = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

interface SidebarMenuProps {
  expanded: boolean;
}

export const SidebarMenu = styled.nav<SidebarMenuProps>`
  display: ${props => (props.expanded ? 'block' : 'none')};
`;