import React from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import { MainContainer, Aside, Btn, ContentContainer } from "./styles/test";

export default function Testing(){

    return (
        <MainContainer>
            <Header/>
            <ContentContainer>
                this is a .tsx file
                <Btn>🍔</Btn>
            </ContentContainer>
            <Aside></Aside>
            <Footer/>
        </MainContainer>
    )
}