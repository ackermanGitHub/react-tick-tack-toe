import React from "react";
import { SideBarContainer } from "./styles/tick-tack-toe";

export default function SideBar({children, ...restProps}) {
    return (
      <SideBarContainer {...restProps}>
        {children}
      </SideBarContainer>
    );
}