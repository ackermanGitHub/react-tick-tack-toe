import React from "react";
import { HeaderContainer, NavContainer, ContentContainer, Text, ButtonLink } from"./styles/header";

export default function Header({children, ...restProps}){
    return (
        <HeaderContainer {...restProps}>
            <NavContainer height={"auto"}>
                <Text>Lorem Ipsum</Text>
                <ButtonLink margintop={"0"} to={"/"}>Home</ButtonLink>
            </NavContainer>
            <ContentContainer margintop={"40px"} height={"100%"} direction={"column"} >
                {children}
            </ContentContainer>
        </HeaderContainer>
    )
}