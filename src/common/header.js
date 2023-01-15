import React from "react";
import { Container, Text,ButtonLink, ContentContainer, NavContainer } from"./styles/header";

export default function HeaderContainer({children, ...restProps}){
    return (
        <Container {...restProps}>
            <NavContainer height={"auto"}>
                <Text>Lorem Ipsum</Text>
                <ButtonLink margintop={"0"} to={"/"}>Home</ButtonLink>
            </NavContainer>
            <ContentContainer margintop={"40px"} height={"100%"} direction={"column"} >
                {children}
            </ContentContainer>
        </Container>
    )
}