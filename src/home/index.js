import React from "react";
import { MainContainer, ContentContainer, 
    ButtonLink, BtnsContainer, 
    Title, SubTitle } from "./styles/home";
import Footer from "../common/footer";
import Header from "../common/header";

export default function Home() {
    return (
        <MainContainer>
            <Header>
                <ContentContainer>
                    <Title>An Aplication for Enterteiment</Title>
                    <SubTitle>Personal proyect implementing React, npm, advanced javascript, and APIs for earn practic    experience</SubTitle>
                    <BtnsContainer>
                        <ButtonLink to={"/Game"}>Game</ButtonLink>
                        <ButtonLink to={"/Calculator"}>Calculator</ButtonLink>
                        <ButtonLink to={"/Random-Generator"}>Random Generator</ButtonLink>
                        <ButtonLink to={"/Cat-API"}>Cat API</ButtonLink>
                    </BtnsContainer>
                </ContentContainer>
            </Header>
            <Footer/>
        </MainContainer>
    )
}