import React from "react";
import { HeaderContainer, NavContainer, 
    Text, ButtonLink } from"./styles/header";

export default function Header({children = null, ...restProps}){
    return (
        <HeaderContainer {...restProps}>
            <NavContainer>
                <Text>Lorem Ipsum</Text>
                <ButtonLink to={"/"}>Home</ButtonLink>
            </NavContainer>
            {children}
        </HeaderContainer>
    )
}