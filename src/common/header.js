import React from "react";
import { Container, Text } from"./styles/header";
import { ButtonLink } from "./styles";

export default function HeaderContainer(){
    return (
        <Container>
            <Text>Lorem Ipsum</Text>
            <ButtonLink marginTop={"0"} to={"/"}>Home</ButtonLink>
        </Container>
    )
}