import React from "react";
import { SideBarContainer } from "./styles/tick-tack-toe";

export default function GameSideBar({children, ...restProps}) {
    return (
      <SideBarContainer {...restProps}>
        {children}
      </SideBarContainer>
    );
}