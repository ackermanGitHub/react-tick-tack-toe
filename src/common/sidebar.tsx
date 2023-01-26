import React, { useState } from 'react';
import { Close as CloseIcon, 
  ExpandMore as ExpandMoreIcon, 
  ExpandLess as ExpandLessIcon } from '@mui/icons-material';
import { CloseSideBar, SidebarContainer, SidebarToggle, SidebarMenu } from './styles/sidebar';

interface Props {}

const Sidebar: React.FC<Props> = ({ handleClose }: { handleClose: Function }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <SidebarContainer>
      <SidebarToggle onClick={() => setExpanded(!expanded)}>
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </SidebarToggle>
      <CloseSideBar>
        <CloseIcon onClick={()=>{handleClose()}} sx={{ fontSize: 40 }}/>
      </CloseSideBar>
      <SidebarMenu expanded={expanded}>
        <ul>
          <li>123456</li>
          <li>123456</li>
          <li>123456</li>
          <li>123456</li>
          <li>123456</li>
          <li>123456</li>
        </ul>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;