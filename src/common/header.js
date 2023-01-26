import React, { useState } from "react";
import { HeaderContainer, NavContainer, 
    Text, ButtonLink } from"./styles/header";
import Sidebar from "./sidebar";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export default function Header({children = null, ...restProps}){
    const [isSideBar, setSideBar] = useState(false);

    return (
        <HeaderContainer {...restProps}>
            {isSideBar ? <Sidebar handleClose={()=>{setSideBar(false)}}/> : null}
            <NavContainer>
                <ButtonLink to={"/"}>Home</ButtonLink>
                <Text>Lorem Ipsum</Text>
                <MenuOpenIcon onClick={()=>setSideBar(true)} sx={{ fontSize: 40 }} />
            </NavContainer>
            {children}
        </HeaderContainer>
    )
}