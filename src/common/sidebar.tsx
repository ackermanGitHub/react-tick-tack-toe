import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { SidebarContainer, SidebarToggle, SidebarMenu } from './styles/sidebar';

interface Props {}

const Sidebar: React.FC<Props> = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <SidebarContainer>
      <SidebarToggle onClick={() => setExpanded(!expanded)}>
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </SidebarToggle>
      <SidebarMenu expanded={expanded}>
        {/* Add sidebar menu items here */}
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;