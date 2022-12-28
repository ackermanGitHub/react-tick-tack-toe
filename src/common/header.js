import React from "react";
import { Container, Text } from"./styles/header";
import { ButtonLink, ContentContainer, NavContainer } from "./styles";

export default function HeaderContainer({children, ...restProps}){
    return (
        <Container {...restProps}>
            <NavContainer height={"auto"}>
                <Text>Lorem Ipsum</Text>
                <ButtonLink margintop={"0"} to={"/"}>Home</ButtonLink>
            </NavContainer>
            <ContentContainer margintop={"20px"} height={"100%"} direction={"column"} >
                {children}
            </ContentContainer>
        </Container>
    )
}