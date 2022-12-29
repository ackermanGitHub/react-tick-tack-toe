import React from "react";
import { ButtonLink, MainContainer, ContentContainer, Title, SubTitle } from "../common/styles";
import Footer from "../common/footer";
import HeaderContainer from "../common/header";

export default function Home() {
    return (
        <MainContainer direction={"column"}>
            <HeaderContainer direction={"column"}>
                {/* Here is a nav inside the Header Container. Got to fix that later */}
                <Title>An Aplication for Enterteiment</Title>
                <SubTitle>Personal proyect implementing React, npm, advanced javascript, and APIs for earn practic    experience</SubTitle>
                <ContentContainer height={"auto"} background-color={"red"}>
                    <ButtonLink to={"/Game"}>Game</ButtonLink>
                    <ButtonLink to={"/Calculator"}>Calculator</ButtonLink>
                    <ButtonLink to={"/Random-Generator"}>Random Generator</ButtonLink>
                </ContentContainer>
            </HeaderContainer>
            <Footer></Footer>
        </MainContainer>
    )
}