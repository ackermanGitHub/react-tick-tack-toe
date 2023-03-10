import React from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import CatsScroll from "./catsScroll";
import { MainContainer, ContentContainer } from "./styles/catApi";

export default function CatAPI() {
    return (
        <MainContainer>
            <Header/>
            <ContentContainer>
                <CatsScroll/>
            </ContentContainer>
            <Footer></Footer>
        </MainContainer>
    )
}